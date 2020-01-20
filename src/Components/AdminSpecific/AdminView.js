import React, { useState } from 'react'
import CreateUserDialog from './CreateUserDialog'
import useInput from '../../useHooks/useInput'
import { Typography, TextField, Grid, InputAdornment, Button, Tooltip, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import TodosCard from '../Card/TodosCard'
import CloseIcon from '@material-ui/icons/Close';

const AdminView = ({ users, todos, setNotification }) => {

  const [createUserDialogStatus, setCreateUserDialogStatus] = useState(false)


  // Search filter
  const tasksFilter = useInput()
  console.log(`tasksFilter.input: ${tasksFilter.input}`)

  // case insensitive + les accents sont ignorés
  const filteredTasks = todos.todoList
    .filter(td => td.text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .includes(tasksFilter.input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")))

  const filteredUserNames = [...new Set(filteredTasks.map(x => x.userName))]

  // Ternary operator to make sure empty todocards showup when no filter is on
  const filteredUsers = tasksFilter.input ? users.userList.filter(u => filteredUserNames.includes(u.name)) : users.userList


  // Un peu brouillon 
  // Extract search box into its own external component?

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

          <TextField label="Chercher"
            placeholder='ex: "fournisseur"' size="small"
            variant="filled" onChange={tasksFilter.onChange} value={tasksFilter.input} InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" >
                  {tasksFilter.input ?
                    <IconButton size='small' onClick={tasksFilter.clear}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                    : ''}

                </InputAdornment>
              )
            }} />

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