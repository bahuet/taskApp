import React from 'react'
import TodoList from './TodoList'
import CreateTodoForm from './CreateTodoForm'
import CreateUserButton from './CreateUserButton'
import { Typography, Paper, Button } from "@material-ui/core";

const AdminView = ({ users, todos, setStatus }) => {
  const deleteUser = name => {
    users.deleteUser(name)
    setStatus(`${name} a été supprimé`)
  }
  return (
    <div>
      <Typography variant='h4'> Administration panel</Typography>
      <CreateTodoForm actions={todos.adminActions} users={users} />
      <CreateUserButton users={users} />
      {users.userList.map((user, i) => (
        <div key={user + i}>
          <Paper variant="outlined">
            <Typography variant='subtitle2'>Tableau de bord de:   {user} <Button onClick={() => deleteUser(user)}>Supprimer</Button> </Typography>
            <TodoList userTodos={todos.todoList.filter(td => td.user === user)} actions={todos.adminActions} mode="admin" setStatus={setStatus} />
          </Paper>
        </div>
      ))}
    </div>
  )
}

export default AdminView