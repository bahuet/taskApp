import { useState } from "react"

export default (log, initialValues = []) => {
  const [todoList, setTodoList] = useState(initialValues)
  const getTodo = id => todoList.find(x => x.id === id)

  return {
    todoList,
    setTodoList,
    //On divise les types d'actions selon le type d'utilisateur (admin/user)

    adminActions: {
      addTodo: (userId, userName, text, urgent = false) => {
        const id =
          todoList.length > 0
            ? Math.max(...todoList.map(x => x.id)) + 1
            : 2000000
        const newTodos = [
          ...todoList,
          {
            id: id,
            userId: userId,
            userName: userName,
            text: text,
            completed: false,
            urgent: urgent,
            focus: false
          }
        ]
        setTodoList(newTodos)
        log.addToLog("Admin", `Task assigned to: ${userName}`, id, text)
        return id
      },

      deleteTodo: id => {
        const newTodos = todoList.filter(x => id !== x.id)
        setTodoList(newTodos)
        log.addToLog("Admin", "Task deletion", id, getTodo(id).text)
      },

      transferTodo: (id, newUserId, newUserName) => {
        const todo = getTodo(id)
        const newTodos = todoList.map(x =>
          x.id === id ? { ...x, userId: newUserId, userName: newUserName } : x
        )
        setTodoList(newTodos)
        log.addToLog(
          "Admin",
          `Task user transfer from ${todo.userName} to ${newUserName}`,
          id,
          getTodo(id).text
        )
      },

      changeProperty: (id, property, boolValue, actor = "Admin") => {
        const formerValue = getTodo(id)[property]
        const newTodos = todoList.map(x =>
          id === x.id ? { ...x, [property]: boolValue } : x
        )

        setTodoList(newTodos)
        log.addToLog(
          actor,
          `${property} set from ${formerValue} to ${boolValue}`,
          id,
          getTodo(id).text
        )
      }
    },
    userActions: {
      changeProperty: (id, property, boolValue) => {
        const todo = getTodo(id)
        const formerValue = todoList.find(x => x.id === id)[property]
        const newTodos = todoList.map(x =>
          id === x.id ? { ...x, [property]: boolValue } : x
        )
        setTodoList(newTodos)
        log.addToLog(
          `${todo.userName} (${todo.userId})`,
          `${property} set from ${formerValue} to ${boolValue}`,
          id,
          getTodo(id).text
        )
      },

      setFocusById: userId => {
        return taskId => {
          const todo = getTodo(taskId)
          const newTodos = todoList.map(x =>
            x.userId === userId
              ? x.id === taskId
                ? { ...x, focus: !x.focus }
                : { ...x, focus: false }
              : x
          )
          setTodoList(newTodos)
          log.addToLog(
            `${todo.userName} (${todo.userId})`,
            `toggled focus`,
            taskId,
            getTodo(taskId).text
          )
        }
      }
    }
  }
}
