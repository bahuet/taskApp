import React from 'react'
import TodosCard from '../Card/TodosCard'
import TodoStatus from '../Secondary/TodoStatus'
import { Typography } from '@material-ui/core'

const UserView = ({ user, userTodos, actions, setNotification }) => {
  return (
    <>
      <TodoStatus userTodos={userTodos} />
      <br />
      <TodosCard user={user} userTodos={userTodos} actions={actions}
        setFocus={actions.setFocusById(user.id)}
        admin={false} setNotification={setNotification} />
    </>
  )
}

export default UserView