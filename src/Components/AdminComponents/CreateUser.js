import React, { useState, useRef } from 'react'
import useInput from '../../useHooks/useInput'
import AddIcon from '@material-ui/icons/Add';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { makeStyles } from '@material-ui/core/styles';



import { TextField, Button, Grid, InputLabel, Select, MenuItem, Box, Fab, FormControl, FormHelperText } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))

//Dialog? Ou bien inline textfield?

export default ({ users, setNotification }) => {
  const classes = useStyles();

  const name = useInput()
  const role = useInput()

  const roleList = [...new Set(users.userList.map(x => x.role))]

  const onButtonClick = e => {
    e.preventDefault()
    const trimmedName = name.input.trim()
    const trimmedRole = role.input.trim()
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

  // On utilise exceptionnellement une ref pour le focus du textfield
  const [textFieldActive, setTextFieldActive] = useState(false)
  let textInput = useRef(null);
  const setActiveAndFocus = () => {
    setTextFieldActive(true)
    setTimeout(() => {
      textInput.current.focus();
    }, 100)
  }



  return (
    <Grid container direction="row" alignItems="center">

      <Grid item>
        <FormControl>
          <TextField label="Nom de l'utilisateur" value={name.input} onChange={name.onChange} />
        </FormControl>
      </Grid>

      <Grid item>
        <FormControl >
          <InputLabel >Rôle</InputLabel>
          <Select value={role.input} onChange={role.onChange}        >
            {roleList.map((role, i) => <MenuItem value={role} key={role + i}>{role}</MenuItem>)}
          </Select>
          <FormHelperText>Choisir un rôle existant</FormHelperText>
        </FormControl>
      </Grid>

      <Grid item>
        <FormControl>
          <TextField
            label="Rôle"
            onClick={setActiveAndFocus}
            inputRef={textInput}
            disabled={!textFieldActive}
            onChange={role.onChange}
            value={role.input}
            helperText="Créer un nouveau rôle"
          />
        </FormControl>
      </Grid>

      <Grid item>
        <Button onClick={onButtonClick}> Créer l'utilisateur</Button>
      </Grid>

    </Grid >

  )
}

