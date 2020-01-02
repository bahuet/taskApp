import React, { useState } from 'react'
import useInput from '../useHooks/useInput'
import { TextField, Button, Grid, InputLabel, Select, MenuItem, Box } from '@material-ui/core'


const CreateTodoForm = ({ actions, users }) => {
  const text = useInput('')
  const selection = useInput('')

  const submitFunction = e => {
    e.preventDefault()

    if (selection.input === '') {
      alert('Vous devez selectionner la personne à qui attribuer la tâche')
      return;
    }
    const trimmedInput = text.input.trim()
    if (trimmedInput) {
      actions.addTodo(selection.input, trimmedInput)
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
              {users.userList.map((u, i) => <MenuItem key={u + i} value={u}>{u}</MenuItem>)}
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

export default CreateTodoForm