import React, { useState } from 'react'
import useInput from '../../useHooks/useInput'
import { TextField, Button, Grid, InputLabel, Select, MenuItem, Box, FormControl } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import NoteAddIcon from "@material-ui/icons/NoteAdd"


export default ({ actions, users, setNotification }) => {
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
      setNotification(`"${trimmedInput}" a été attribué à ${selection.input}.`)
    }

    text.clear()
    selection.clear()
  }

  const useStyles = makeStyles(theme => ({

    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }))
  const classes = useStyles();

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
            <TextField required
              variant="outlined"
              margin="normal"
              placeholder='Ajoutez une tâche'
              onChange={text.onChange}
              value={text.input}
            />
          </Grid>
          attribuer à
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel >Utilisateur</InputLabel>
              <Select onChange={selection.onChange} value={selection.input}>
                {users.userList.map((u, i) => <MenuItem key={u + i} value={u}>{u}</MenuItem>)}
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <Button variant="contained" color="primary" type='submit'>Ajouter</Button>
          </Grid>

        </Grid>
      </form>
    </div >
  )

}

