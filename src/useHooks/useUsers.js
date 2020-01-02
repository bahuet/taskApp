import { useState } from 'react'


export default (log, todos) => {

  const [userList, setUsersList] = useState([])


  return {
    userList,
    addUser: name => {
      setUsersList([...userList, name])
      log.addToLog('Admin', `Created user: ${name}`)
    },
    deleteUser: nameToDelete => {
      const newUserList = userList.filter(user => user !== nameToDelete)
      setUsersList(newUserList)
      todos.todoList.forEach(todo => {
        if (todo.user === nameToDelete) {
          todos.adminActions.deleteTodo(todo.id)
        }
      });
      log.addToLog('Admin', `Deleted user: ${nameToDelete}`)

    }
  }

}


