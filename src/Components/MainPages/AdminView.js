import React, { useState, useEffect } from 'react'
import CreateUserDialog from '../Dialogs/CreateUserDialog'
import useInput from '../useHooks/useInput'
import TodosCard from '../Card/TodosCard'
import SearchBox from '../Secondary/SearchBox'
import AdminDashBoard from './AdminDashBoard'
import AllDoneDialog from '../Secondary/AllDoneDialog'
import { Typography, Grid, Button, Collapse, Switch, IconButton } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';

export default ({ users, todos, setNotification }) => {

  const [fakeUserActivity, setFakeUserActivity] = useState(true)
  useEffect(() => {
    if (fakeUserActivity) {

      const availableTodos = todos.todoList.filter(x => !x.completed)

      let intervalId = setInterval(() => {

        const randomTask = availableTodos[Math.floor(Math.random() * availableTodos.length)]
        if (!randomTask) {
          clearInterval(intervalId)
          return;
        }

        todos.adminActions.changeProperty(randomTask.id, 'completed', true, 'SYSTEM')
      }, Math.random() * 2000)

      return () => clearInterval(intervalId)
    }
  },
    [fakeUserActivity, todos])

  const [createUserDialogStatus, setCreateUserDialogStatus] = useState(false)
  const tasksFilter = useInput()
  const [showDashBoard, setShowDashBoard] = useState(true)
  const [allDone, setAllDone] = useState(false)

  useEffect(() => {
    if (todos.todoList.length !== 0
      && todos.todoList.every(x => x.completed)) {
      setAllDone(true)
    }
  }, [todos.todoList])
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

        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant='h4' style={{ margin: '0 0 auto auto' }}> Administration panel </Typography>
          <Typography style={{ marginLeft: 'auto' }}>
            simulation d'activité
                <Switch color='primary' checked={fakeUserActivity} onChange={() => setFakeUserActivity(!fakeUserActivity)} />
          </Typography>
        </Grid>


        <Grid item xs={12} sm={10} md={9} style={{ margin: 0, padding: 0 }} >

          <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <IconButton onClick={() => setShowDashBoard(!showDashBoard)} >
                {showDashBoard ? <CloseIcon /> : <ArtTrackIcon />}
              </IconButton>
            </div>
            <Collapse in={showDashBoard}>
              <AdminDashBoard users={users} todos={todos} />
            </Collapse>
          </div>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="space-around" style={{ marginTop: '2em' }}>

            <Button variant="outlined" color="primary" onClick={() => setCreateUserDialogStatus(true)}>
              Créer un nouvel utilisateur
              </Button>

          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="space-around" style={{ marginTop: '2em' }}>
            <SearchBox tasksFilter={tasksFilter} />

            <Button>PLACEHOLDER SELECT</Button>
          </Grid>
        </Grid>

      </Grid >

      <Grid container
        // TaskCards grid
        spacing={2}
        style={{ marginTop: '1em' }}
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
      <AllDoneDialog todoList={todos.todoList} open={allDone} handleClose={() => setAllDone(false)} />


    </div >
  )
}