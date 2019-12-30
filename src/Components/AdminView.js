import React from 'react'
import TodoList from './TodoList'
import { Typography, Paper } from "@material-ui/core";

const AdminView = ({ users }) => {

  return (
    <div>
      <Typography variant='h4'> Administration panel</Typography>
      {users.map((x, i) => (
        <div key={x.user + i}>
          <Paper variant="outlined">
            <Typography variant='subtitle2'>Tableau de bord de: {x.user} </Typography>
            <TodoList todos={x.todos} />
          </Paper>
        </div>
      ))}
    </div>
  )

}

export default AdminView