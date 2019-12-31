import React from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { Typography, Paper } from "@material-ui/core";

const AdminView = ({ users }) => {
  console.log(`adminview props user: => ${JSON.stringify(users)}`)
  return (
    <div>
      <Typography variant='h4'> Administration panel</Typography>
      {users.map((u, i) => (
        <div key={u.username + i}>
          <Paper variant="outlined">
            <Typography variant='subtitle2'>Tableau de bord de: {u.username} </Typography>
            <TodoList user={u} />
            <TodoForm addTodo={u.addTodo} />
          </Paper>
        </div>
      ))}
    </div>
  )
}

export default AdminView