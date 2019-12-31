import React, { useState } from 'react'
import useInput from '../useHooks/useInput'
import { TextField, Button, Grid, InputLabel, Select, MenuItem, Box } from '@material-ui/core'


const TodoForm = ({ users }) => {

  console.log(`todoForm users prop => ${JSON.stringify(users)}`)
  const text = useInput('')
  const selection = useInput('')



  const submitFunction = e => {
    e.preventDefault()
    console.log(`selectedUserName in submit function: ${selection.input}`)

    if (selection.input === '') {
      alert('Vous devez selectionner la personne à qui attribuer la tâche')
      return;
    }
    const selectedUser = users.find(u => u.username === selection.input)
    const trimmedInput = text.input.trim()
    if (trimmedInput) {
      selectedUser.addTodo(trimmedInput)
    }
    text.clear()
    selection.clear()
  }


  return (
    <div className='add-todo-form'  >

      <form onSubmit={submitFunction}>
        <Grid
          spacing={3}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <TextField
              variant="outlined"
              margin="normal"
              placeholder='Ajoutez une tâche'
              onChange={text.onChange}
              value={text.input}
            />
          </Grid>
          attribuer  à
          <Grid item>
            <Select onChange={selection.onChange} value={selection.input}>
              {users.map((u, i) => <MenuItem key={u.username + i} value={u.username}>{u.username}</MenuItem>)}
            </Select>

          </Grid>


          <Grid item>
            <Button variant="contained" color="primary" type='submit'>Ajouter</Button>
          </Grid>

        </Grid>
      </form>
    </div >
  )

}

export default TodoForm