import React, { useState } from 'react'
import CreateUserDialog from '../Dialogs/CreateUserDialog'
import useInput from '../../useHooks/useInput'
import { Typography, TextField, Grid, Button, Tooltip, IconButton } from "@material-ui/core";
import TodosCard from '../Card/TodosCard'
import SearchBox from '../Secondary/SearchBox'

const AdminView = ({ users, todos, setNotification }) => {

  const [createUserDialogStatus, setCreateUserDialogStatus] = useState(false)

  const tasksFilter = useInput()

  // Filtre
  const normalizeString = str => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  const AIncludesB = (stringA, stringB) => normalizeString(stringA).includes(normalizeString(stringB))
  const getUserRole = userId => users.userList.find(u => u.id === userId).role

  //Logique pour le filtre
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
    <div style={{ padding: '1em', margin: '0 0 0 0' }}>
      <Typography variant='h4'> Administration panel </Typography>
      <Button variant="outlined" color="primary" onClick={() => setCreateUserDialogStatus(true)}>
        Créer un nouvel utilisateur</Button>


      <Grid container spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="stretch">

        <Grid item xs={12} >

          <SearchBox tasksFilter={tasksFilter} />

        </Grid>

        {filteredUsers.map((user) => (
          <Grid item xs={12} key={user.id}>
            <TodosCard user={user} actions={todos.adminActions}
              deleteUser={() => users.deleteUser(user.id)} editUser={users.editUserById(user.id)}
              userTodos={filteredTasks.filter(x => x.userId === user.id)} admin={true} userList={users.userList}
              setNotification={setNotification}
            />
          </Grid>
        ))}

      </Grid>
      {filteredUsers.length === 0 ? <Typography variant='h5'>Pas de résultats</Typography> : null}
      <CreateUserDialog users={users}
        open={createUserDialogStatus}
        closeDialog={() => setCreateUserDialogStatus(false)}
        setNotification={setNotification} />
    </div >
  )
}

export default AdminView