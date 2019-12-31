import React from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { Typography, Paper } from "@material-ui/core";

const AdminView = ({ users }) => {
  return (
    <div>
      <Typography variant='h4'> Administration panel</Typography>
      <TodoForm users={users} />

      {users.map((user, i) => (
        <div key={user.username + i}>
          <Paper variant="outlined">
            <Typography variant='subtitle2'>Tableau de bord de: {user.username} </Typography>
            <TodoList user={user} mode='admin' />
          </Paper>
        </div>
      ))}
    </div>
  )
}

export default AdminView