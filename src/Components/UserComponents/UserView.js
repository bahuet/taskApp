import React from 'react'
import TodosCard from '../TodosCard'
import TodoStatus from '../TodoStatus'
import { Typography } from '@material-ui/core'

const UserView = ({ user, userTodos, actions, setNotification }) => {
  return (
    <>
      <Typography variant='h6'> Tableau de bord de: {user.name}&nbsp;&nbsp;&nbsp; </Typography>
      <TodoStatus userTodos={userTodos} />
      <br />
      <TodosCard user={user} userTodos={userTodos} actions={actions}  
      setFocus={actions.setFocusById(user.id)}
      admin={false} setNotification={setNotification} />
    </>
  )
}

export default UserView