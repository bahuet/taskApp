import { useState } from 'react'

export default (log, initialValues = []) => {
  const [todoList, setTodoList] = useState(initialValues)
  const getTodo = (id) => todoList.find(x => x.id === id)

  return {
    todoList,
    adminActions: {
      addTodo: (user, text) => {
        const id = todoList.length > 0 ? Math.max(...todoList.map(x => x.id)) + 1 : 1
        const newTodos = [{ id: id, user: user, text: text, completed: false, urgent: false, focus: false }, ...todoList]
        setTodoList(newTodos)
        log.addToLog('Admin', `Task assigned to: ${user}`, id, text)

      },
      deleteTodo: id => {
        const newTodos = todoList.filter(x => id !== x.id)
        setTodoList(newTodos)
        log.addToLog('Admin', 'Task deletion', id, getTodo(id).text)

      },
      changeProperty: (id, property, boolValue) => {
        const newTodos = todoList.map(x => id === x.id ? { ...x, [property]: boolValue } : x)
        setTodoList(newTodos)
        log.addToLog('Admin', `${property} set to ${boolValue}`, id, getTodo(id).text)

      },

    },
    userActions: {
      changeProperty: (id, property, boolValue) => {
        const newTodos = todoList.map(x => id === x.id ? { ...x, [property]: boolValue } : x)
        setTodoList(newTodos)
        log.addToLog(getTodo(id).user, `${property} set to ${boolValue}`, id, getTodo(id).text)
      },

      undoUserActions: id => {
        const newTodos = todoList.map(x => id === x.id ? { ...x, completed: false, focus: false } : x)
        setTodoList(newTodos)
        log.addToLog(getTodo(id).user, 'User actions reset to default', id, getTodo(id).text)
      }
    }

  }
}


