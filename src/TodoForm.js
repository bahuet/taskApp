import React from 'react'
import useInput from './useInput'
import { TextField, Button, Grid } from '@material-ui/core'


const TodoForm = ({ addTodo }) => {
  const { input, onChange, clearInput } = useInput('')

  const submitFunction = e => {
    e.preventDefault()
    const trimmedInput = input.trim()
    if (trimmedInput) {
      addTodo(input)
    }
    clearInput()

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
              onChange={onChange}
              value={input}
            />
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