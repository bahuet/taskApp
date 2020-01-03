import TodoList from './TodoList'
import React from 'react'
import { Typography, Paper, Button, Grid } from "@material-ui/core";


const ToDoListWrapper = ({ user, actions, setStatus, deleteUser, filteredTasks }) => {
  const handleClick = () => {
    deleteUser()
    setStatus(`L'utilisateur "${user}" et ses taches ont été supprimées`)
  }

  const section = {
    height: "100%",
    paddingTop: 5,
    backgroundColor: "#fff"
  };
  return (
    <Grid item xs={6} >
      <Paper variant="outlined" style={section}>
        <Typography variant='h6'>
          Tableau de bord de: {user}&nbsp;&nbsp;&nbsp;
                <Button color="secondary" variant="outlined" size='small'
            onClick={handleClick}> Supprimer</Button>
        </Typography>
        <TodoList userTodos={filteredTasks.filter(td => td.user === user)}
          actions={actions} mode="admin" setStatus={setStatus} />
      </Paper>
    </Grid>

  )


}

export default ToDoListWrapper