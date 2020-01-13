import React from 'react'
import CreateTodoForm from './CreateTodoForm'
import CreateUserButton from './CreateUserButton'
import useInput from '../../useHooks/useInput'
import { Typography, TextField, Grid, InputAdornment } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import TodosCard from '../TodosCard'

const AdminView = ({ users, todos, setNotification }) => {

  const tasksFilter = useInput()

  const filteredTasks = todos.todoList
    .filter(td => td.text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .includes(tasksFilter.input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")))


  const filteredUserNames = [...new Set(filteredTasks.map(x => x.userName))]

  const filteredUsers = users.userList.filter(u => filteredUserNames.includes(u.name))

  const editUser = (id, newName, newRole) => {

  }
  // this is to maintain original user array order 
  //const usersToShow = tasksFilter.input === '' ? users.userList : users.userList.filter(u => filteredUsers.includes(u))


  // TODO: un peu brouillon 

  return (
    <div>
      <Typography variant='h4'> Administration panel </Typography>

      <Grid container spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="stretch">

        <Grid item xs={12} >

          <TextField
            placeholder='ex: "fournisseur"' size="small"
            variant="filled" onChange={tasksFilter.onChange} value={tasksFilter.input} InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }} />

        </Grid>

        {filteredUsers.map((user, i) => (
          <Grid item xs={12} key={user + i}>
            <TodosCard user={user} actions={todos.adminActions}
              deleteUser={() => users.deleteUser(user.id)} editUser={users.editUserById(user.id)}
              setNotification={setNotification}
              userTodos={filteredTasks.filter(x => x.userId === user.id)} admin={true} />
          </Grid>
        ))}

      </Grid>
      {filteredUsers.length === 0 ? <Typography variant='h5'>Pas de résultats</Typography> : null}
    </div >
  )
}

export default AdminView