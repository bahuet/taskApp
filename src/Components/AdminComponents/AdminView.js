import React from 'react'
import CreateUser from './CreateUser'
import useInput from '../../useHooks/useInput'
import { Typography, TextField, Grid, InputAdornment } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import TodosCard from '../TodosCard'

const AdminView = ({ users, todos, setNotification }) => {

  // Search filter
  const tasksFilter = useInput()

  const filteredTasks = todos.todoList
    .filter(td => td.text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .includes(tasksFilter.input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")))

  const filteredUserNames = [...new Set(filteredTasks.map(x => x.userName))]

  // Ternary operator to make sure empty todocards showup when no filter is on
  const filteredUsers = tasksFilter.input ? users.userList.filter(u => filteredUserNames.includes(u.name)) : users.userList


  // TODO: un peu brouillon 

  return (
    <div>
      <Typography variant='h4'> Administration panel </Typography>
      <CreateUser users={users} setNotification={setNotification} />
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
    </div >
  )
}

export default AdminView