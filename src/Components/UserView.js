import React from 'react'
import TodoList from './TodoList'
import TodoStatus from './TodoStatus'
import { Typography } from '@material-ui/core'

const UserView = ({ user, userTodos, actions }) => {
  return (
    <>
      <Typography>Tableau de bord de {user}</Typography>
      <TodoStatus userTodos={userTodos} />
      <br />
      <TodoList userTodos={userTodos} actions={actions} mode="user"/>
    </>
  )
}

export default UserView