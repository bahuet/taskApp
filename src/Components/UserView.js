import React from 'react'
import TodoList from './TodoList'
import TodoStatus from './TodoStatus'
import { Typography } from '@material-ui/core'

const UserView = ({ user, userTodos, actions, setStatus }) => {
  return (
    <>
      <Typography>Tableau de bord de <em>{user}</em></Typography>
      <TodoStatus userTodos={userTodos} />
      <br />
      <TodoList userTodos={userTodos} actions={actions} mode="user" setStatus = {setStatus} />
    </>
  )
}

export default UserView