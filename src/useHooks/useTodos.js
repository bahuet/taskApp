import { useState } from 'react'

export default (log, initialValues = []) => {
  const [todoList, setTodoList] = useState(initialValues)
  const getTodo = (id) => todoList.find(x => x.id === id)
  return {
    todoList,
    setTodoList,
    adminActions: {

      addTodo: (userId, userName, text) => {
        const id = todoList.length > 0 ? Math.max(...todoList.map(x => x.id)) + 1 : 2000000
        const newTodos = [{ id: id, userId: userId, userName: userName, text: text, completed: false, urgent: false, focus: false }, ...todoList]
        setTodoList(newTodos)
        log.addToLog('Admin', `Task assigned to: ${userName}`, id, text)
      },

      deleteTodo: id => {
        const newTodos = todoList.filter(x => id !== x.id)
        setTodoList(newTodos)
        log.addToLog('Admin', 'Task deletion', id, getTodo(id).text)
      },

      changeProperty: (id, property, boolValue) => {
        console.log(`changeProperty fired! parameters: (${id}, ${property}, ${boolValue})`)
        const formerValue = todoList.find(x => x.id === id)[property]
        const newTodos = todoList.map(x => id === x.id ? { ...x, [property]: boolValue } : x)
        setTodoList(newTodos)
        log.addToLog('Admin', `${property} set from ${formerValue} to ${boolValue}`, id, getTodo(id).text)
      },

    },
    userActions: {

      changeProperty: (id, property, boolValue) => {
        const todo = getTodo(id)
        const formerValue = todoList.find(x => x.id === id)[property]
        const newTodos = todoList.map(x => id === x.id ? { ...x, [property]: boolValue } : x)
        setTodoList(newTodos)
        log.addToLog(`${todo.userName} (${todo.userId})`, `${property} set from ${formerValue} to ${boolValue}`, id, getTodo(id).text)
      },

      setFocusById: (userId) => {
        return (taskId) => {
          const todo = getTodo(taskId)
          const newTodos = todoList.map(x => x.userId === userId ?
            (x.id === taskId ? { ...x, focus: true } :
              { ...x, focus: false }) : x)
          setTodoList(newTodos)
          log.addToLog(`${todo.userName} (${todo.userId})`, `focus set to true`, taskId, getTodo(taskId).text)
        }
      }

      // à supprimer bientôt 
      // undoUserActions: id => {
      //   const newTodos = todoList.map(x => id === x.id ? { ...x, completed: false, focus: false } : x)
      //   setTodoList(newTodos)
      //   log.addToLog(getTodo(id).user, 'User actions reset to default', id, getTodo(id).text)
      // }
    }

  }
}


