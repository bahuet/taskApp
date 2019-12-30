import React from 'react'
import TodoList from './TodoList'
import TodoStatus from './TodoStatus'
import { Typography } from '@material-ui/core'

const UserView = ({users}) => {
  return (
    <>
    <Typography>Tableau de bord de {username}</Typography>
      <TodoStatus todos={todos} />
      <br />
      <TodoList todos={todos} toggleTodoCompletion={toggleTodoCompletion} deleteTodo={deleteTodo} />
    </>
  )
}
