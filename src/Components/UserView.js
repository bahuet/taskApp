import React from 'react'
import TodoList from './TodoList'
import TodoStatus from './TodoStatus'
import { Typography } from '@material-ui/core'

const UserView = ({ user, userTodos, actions, setNotification }) => {
  return (
    <>
      <Typography variant='h6'> Tableau de bord de: {user}&nbsp;&nbsp;&nbsp; </Typography>
      <TodoStatus userTodos={userTodos} />
      <br />
      <TodoList userTodos={userTodos} actions={actions} mode="user" setNotification={setNotification} />
    </>
  )
}

export default UserView