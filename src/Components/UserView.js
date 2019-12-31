import React from 'react'
import TodoList from './TodoList'
import TodoStatus from './TodoStatus'
import { Typography } from '@material-ui/core'

const UserView = ({ user }) => {
  return (
    <>
      <Typography>Tableau de bord de {user.username}</Typography>
      <TodoStatus todos={user.todos} />
      <br />
      <TodoList user={user} />
    </>
  )
}

export default UserView