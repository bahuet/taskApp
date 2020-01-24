import React, { useState } from 'react'

import CreateUserDialog from '../Dialogs/CreateUserDialog'
import useInput from '../useHooks/useInput'
import TodosCard from '../Card/TodosCard'
import SearchBox from '../Secondary/SearchBox'
import BarChart from '../Secondary/BarChart'
import ProgressBar from '../Secondary/ProgressBar'
import { Typography, Grid, Button } from "@material-ui/core";

export default ({ users, todos, setNotification }) => {

  const [createUserDialogStatus, setCreateUserDialogStatus] = useState(false)
  const tasksFilter = useInput()

  // Filtre
  const normalizeString = str => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  const AIncludesB = (stringA, stringB) => normalizeString(stringA).includes(normalizeString(stringB))
  const getUserRole = userId => {
    const user = users.userList.find(u => u.id === userId)
    return user ? user.role : ''
  }

  // Logique pour le filtre
  // Le filtrage est appliqué sur les tasks, user.name, user.role
  // (mais on ne filtre pas les taches d'un user si son .name ou .role .includes === true) 
  const filteredTasks = todos.todoList
    .filter(task => AIncludesB(task.text, tasksFilter.input)
      || AIncludesB(task.userName, tasksFilter.input)
      || AIncludesB(getUserRole(task.userId), tasksFilter.input))

  const filteredUsers = users.userList.filter(user =>
    AIncludesB(user.name, tasksFilter.input)
    || AIncludesB(user.role, tasksFilter.input)
    || filteredTasks.map(task => task.userName).includes(user.name))

  return (
    <div style={{ padding: '1em', margin: '1em' }}>

      <Grid
        // Menu grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        spacing={4} >

        <Grid item xs={12} style={{ textAlign: 'center' }} >
          <Typography variant='h4'> Administration panel </Typography>
        </Grid>


        <Grid container justify="center"
        //  TODO => il faudra optimiser
        >
          <Grid item >
            <BarChart userList={users.userList} taskList={todos.todoList} />
          </Grid>

          <Grid item style={{ padding: "40px 40px 40px 40px", maxHeight: '20%', maxWidth: '20%', textAlign: 'center' }}>
            <ProgressBar taskList={todos.todoList} />
            <Typography variant="caption" display="block">Pourcentage de tâches terminées</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="space-around">
            <SearchBox tasksFilter={tasksFilter} />

            <Button variant="outlined" color="primary" onClick={() => setCreateUserDialogStatus(true)}>
              Créer un nouvel utilisateur
          </Button>
          </Grid>
        </Grid>

      </Grid >



      <Grid container
        // TaskCards grid
        spacing={6}
        style={{ marginTop: '2em' }}
        justify="center"
        alignItems="stretch"
      >
        {filteredUsers.map((user) => (

          <Grid item key={user.id} >
            <TodosCard user={user} actions={todos.adminActions}
              deleteUser={() => users.deleteUser(user.id)} editUser={users.editUserById(user.id)}
              userTodos={filteredTasks.filter(x => x.userId === user.id)} admin={true} userList={users.userList}
              setNotification={setNotification} />
          </Grid>

        ))}

        <Grid item >
          {filteredUsers.length === 0 ? <Typography variant='h4' color='textSecondary'>Pas de résultats</Typography> : null}
        </Grid>

      </Grid>

      <CreateUserDialog users={users}
        open={createUserDialogStatus}
        closeDialog={() => setCreateUserDialogStatus(false)}
        setNotification={setNotification} />
    </div >
  )
}