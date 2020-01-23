import { useState } from 'react'
import getAvatarName from '../assets/helpers/getAvatarName'

export default (log, todos, initialValues = []) => {
  const [userList, setUsersList] = useState(initialValues)
  const getNewId = () => {
    const maxId = Math.max(...userList.map(x => x.id))
    return maxId ? maxId + 1 : 1000000
  }

  return {
    userList,
    setUsersList,

    addUser: (name, role) => {
      const newId = getNewId()
      setUsersList([{ id: newId, name: name, role: role, avatar: getAvatarName() }, ...userList])
      log.addToLog('Admin', `Created user: id: ${newId}, name: ${name}, role: ${role}`)
    },

    deleteUser: idToDelete => {
      const username = userList.find(u => u.id === idToDelete).name
      const newUserList = userList.filter(user => user.id !== idToDelete)
      setUsersList(newUserList)
      todos.todoList.forEach(todo => {
        if (todo.userId === idToDelete) {
          todos.adminActions.deleteTodo(todo.id)
        }
      });
      log.addToLog('Admin', `Deleted user: ${username}`)
    },

    editUserById: idToEdit => {
      const user = userList.find(x => x.id === idToEdit)
      return ((newName, newRole) => {

        const editedUser = { ...user, id: idToEdit, name: newName, role: newRole }
        const newUserList = userList.map(u => u.id === idToEdit ? editedUser : u)
        setUsersList(newUserList)
        todos.todoList.forEach(todo => {
          if (todo.userId === idToEdit) {
            todos.adminActions.changeProperty(todo.id, 'userName', newName)
          }
        })
        log.addToLog('Admin', `edited user ${idToEdit} with new values: ${newName}, ${newRole}`)

      })
    }
  }

}


