import React from 'react'
import useInput from '../useHooks/useInput'
import { TextField, Button, Grid, InputLabel, Select, MenuItem, Box } from '@material-ui/core'

const CreateUserButton = ({ users }) => {
  const textFieldPlaceholder = "Nom de l'utilisateur"
  const textField = useInput(textFieldPlaceholder)

  const onButtonClick = () => {
    users.addUser(textField.input)
    textField.clear()
  }
  
  const onTextFieldClick = () => {
    if (textField.input === textFieldPlaceholder) {
      textField.clear()
    }
  }
  return (
    <Grid
      container >

      <Grid item>

      </Grid>

      <TextField onChange={textField.onChange} value={textField.input}
        onClick={onTextFieldClick} />
      <Grid item>
        <Button onClick={onButtonClick}>
          Ajouter l'utilisateur
      </Button>
      </Grid>
    </Grid >
  )
}

export default CreateUserButton