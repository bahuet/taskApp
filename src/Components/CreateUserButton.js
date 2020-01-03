import React, { useState } from 'react'
import useInput from '../useHooks/useInput'
import AddIcon from '@material-ui/icons/Add';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';


import { TextField, Button, Grid, InputLabel, Select, MenuItem, Box, Fab } from '@material-ui/core'

const CreateUserButton = ({ users, setStatus }) => {
  const [showTextField, setShowTextField] = useState(false)
  const textField = useInput()

  const onButtonClick = e => {
    e.preventDefault()
    const trimmedInput = textField.input.trim()
    if (!trimmedInput) { return; }

    if (users.userList.map(x => x.toLowerCase()).includes(trimmedInput.toLowerCase())) {
      alert(`L'utilisateur ${trimmedInput} existe déja`)
      return;
    }
    users.addUser(textField.input)
    setStatus(`L'utilisateur "${textField.input}" a été créé.`)
    setShowTextField(false)
    textField.clear()
  }


  return (


    <form onSubmit={onButtonClick}>

      <Fab color="primary" onClick={() => setShowTextField(!showTextField)}>
        {showTextField ? <RemoveCircleIcon /> : <AddIcon />}
      </Fab>
      {showTextField ? <>
        <TextField required onChange={textField.onChange} placeholder="Nom de l'utilisateur" value={textField.input} />
        <Button type='submit' variant="contained" color="primary">
          Ajouter
      </Button>
      </> : null}


    </form>

  )
}

export default CreateUserButton