import React, { useState, useRef } from 'react'
import useInput from '../../useHooks/useInput'
import AddIcon from '@material-ui/icons/Add';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { makeStyles } from '@material-ui/core/styles';



import { TextField, Button, Dialog, InputLabel, Select, MenuItem, Box, Fab, FormControl, FormHelperText, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'



//Dialog? Ou bien inline textfield?

export default ({ users, open, closeDialog, setNotification }) => {

  const name = useInput()
  const role = useInput()

  const roleList = [...new Set(users.userList.map(x => x.role))]


  const trimmedName = name.input.trim()
  const trimmedRole = role.input.trim()

  const onButtonClick = e => {
    e.preventDefault()
    if (!trimmedName) {
      alert(`Merci d'entrer le nom d'utilisateur`)
      return;
    }
    if (!trimmedRole) {
      if (!window.confirm(`Vous n'avez pas entré de rôle, continuer quand même?`)) {
        return;
      }
    }
    if (users.userList.map(x => x.name.toLowerCase()).includes(trimmedName.toLowerCase())) {
      alert(`L'utilisateur ${trimmedName} existe déja`)
      return;
    }
    role.clear()
    name.clear()
    users.addUser(trimmedName, trimmedRole)
    setNotification(`L'utilisateur ${trimmedName} (${trimmedRole}) a été créé.`)
  }


  const handleClose = () => {
    role.clear()
    name.clear()
    closeDialog()
  }


  // On utilise exceptionnellement une ref pour le focus du textfield
  const [textFieldActive, setTextFieldActive] = useState(false)
  let textInput = useRef(null);
  const setActiveAndFocus = () => {
    setTextFieldActive(true)
    setTimeout(() => {
      textInput.current.focus();
    }, 100)
  }

  const handleSelectChange = e => {
    setTextFieldActive(false)
    role.onChange(e)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle >Créer un nouvel utilisateur</DialogTitle>
      <DialogContent>

        <DialogActions>
          <TextField label="Nom de l'utilisateur" variant="filled" value={name.input} onChange={name.onChange} />
        </DialogActions>

        <DialogActions>
          <FormControl >
            <InputLabel >Choisir parmis les rôles existants</InputLabel>
            <Select variant="filled" value={role.input} onChange={handleSelectChange}        >
              {roleList.map((role, i) => <MenuItem value={role} key={role + i}>{role}</MenuItem>)}
            </Select>
            <FormHelperText>Choisir un rôle existant</FormHelperText>
          </FormControl >
          ou
          <TextField
            label="Rôle"
            variant="filled"
            onClick={setActiveAndFocus}
            inputRef={textInput}
            disabled={!textFieldActive}
            onChange={role.onChange}
            value={role.input}
            helperText="Créer un nouveau rôle"
          />
        </DialogActions>

        <DialogActions>
          <Button variant="contained" color='primary' onClick={onButtonClick} disabled={Boolean(!trimmedName)}> Créer l'utilisateur</Button>
        </DialogActions>
      </DialogContent>

    </Dialog>


  )
}

