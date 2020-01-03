import React from 'react'
import TodoList from './TodoList'
import CreateTodoForm from './CreateTodoForm'
import CreateUserButton from './CreateUserButton'
import useInput from '../useHooks/useInput'
import { Typography, Paper, Button, TextField, Grid, InputAdornment } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const AdminView = ({ users, todos, setStatus }) => {

  const deleteUser = name => {
    users.deleteUser(name)
    setStatus(`L'utilisateur "${name}" et ses taches ont été supprimées`)
  }

  const tasksFilter = useInput()

  const filteredTasks = todos.todoList
    .filter(td => td.text.toLowerCase().includes(tasksFilter.input.toLowerCase()))


  const filteredUsers = [...new Set(filteredTasks.map(x => x.user))]
  // this is to maintain original user array order
  const usersToShow = tasksFilter.input === '' ? users.userList : users.userList.filter(u => filteredUsers.includes(u))

  const section = {
    height: "100%",
    paddingTop: 5,
    backgroundColor: "#fff"
  };
  // TODO: un peu brouillon 

  return (
    <div>
      <Typography variant='h4'>Administration panel </Typography>
      <Grid container spacing={2} justify="space-around"   >

        <Grid item>  <CreateTodoForm actions={todos.adminActions} users={users} setStatus={setStatus} />
        </Grid>

        <Grid item >   <Typography>Ajouter un utilisateur:</Typography>      <CreateUserButton users={users} setStatus={setStatus} />
        </Grid>

      </Grid>

      <Grid container spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="stretch">

        <Grid item xs={12} >

          <TextField
            label="Recherche"
            placeholder='ex: "fournisseur"' size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="filled" onChange={tasksFilter.onChange} value={tasksFilter.input}></TextField>
        </Grid>

        {usersToShow.map((user, i) => (

          <Grid key={user + i} item xs={6} >
            <Paper variant="outlined" style={section}>
              <Typography variant='h6'>
                Tableau de bord de: {user}&nbsp;&nbsp;&nbsp;
                <Button color="secondary" variant="outlined" size='small'
                  onClick={() => deleteUser(user)}> Supprimer</Button>
              </Typography>
              <TodoList userTodos={filteredTasks.filter(td => td.user === user)}
                actions={todos.adminActions} mode="admin" setStatus={setStatus} />
            </Paper>
          </Grid>
        ))}
      </Grid>
      {usersToShow.length === 0 ? <Typography variant='h5'>Pas de résultats</Typography> : null}
    </div >
  )
}

export default AdminView