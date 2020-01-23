import React, { useState } from 'react'

import useInput from '../useHooks/useInput'

import Autocomplete from '@material-ui/lab/Autocomplete';

import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'

//Dialog? Ou bien inline textfield?
export default ({ users, open, closeDialog, setNotification }) => {

  const name = useInput()
  //Cas exceptionnel plus bas, on utilise useState au lieu de modifier useInput (temporaire: todo)
  const [role, setRole] = useState('')

  const roleList = [...new Set(users.userList.map(x => x.role))]

  const trimmedName = name.input && name.input.trim()
  const trimmedRole = role && role.trim()

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

    setRole('')
    name.clear()
    users.addUser(trimmedName, trimmedRole)
    closeDialog()
    setNotification(`L'utilisateur ${trimmedName} (${trimmedRole}) a été créé.`)
  }

  const handleClose = () => {
    setRole('')
    name.clear()
    closeDialog()
  }

  // le comportement d'autocomplete est un peu étrange
  // Si la valeur est select depuis le menu déroulant, on la récupère avec value depuis <Autocomplete>
  // sinon avec e.target.value depuis le <TextField> comme d'habitude
  const handleRoleChange = (event, value) => {
    const input = event.target.value ? event.target.value : value
    setRole(input)
  }

  return (
    <Dialog open={open} onClose={handleClose}>

      <DialogTitle >Créer un nouvel utilisateur</DialogTitle>

      <DialogContent>

        <DialogContentText>
          Entrer le nom et le rôle du nouvel utilisateur
        </DialogContentText>

        <TextField fullWidth label="Nom de l'utilisateur" variant="filled" value={name.input} onChange={name.onChange} />

        <Autocomplete
          freeSolo
          disableClearable
          options={roleList}
          onChange={handleRoleChange}
          renderInput={params => (
            <TextField
              onChange={handleRoleChange}
              {...params}
              label="Rôle"
              margin="normal"
              variant="filled"
              fullWidth
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
        />

        <DialogActions>

          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>

          <Button variant="contained" color='primary' onClick={onButtonClick} disabled={Boolean(!trimmedName)}>
            Créer l'utilisateur
          </Button>

        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

