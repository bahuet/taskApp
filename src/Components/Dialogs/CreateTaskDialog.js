
import React, { useState } from 'react';

import useInput from '../useHooks/useInput'

import {
  FormControlLabel,
  Checkbox,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  DialogContent
} from "@material-ui/core"

export default ({ user, open, handleClose, userTodos, actions, setNotification }) => {

  const [urgentChecked, setUrgentChecked] = useState(false)
  const text = useInput()

  const activeTasks = userTodos.filter(x => !x.completed)
  const activeAndUrgent = activeTasks.filter(x => x.urgent)

  const trimmedInput = text.input.trim()

  const handleSubmit = () => {
    if (trimmedInput) {
      actions.addTodo(user.id, user.name, trimmedInput, urgentChecked)
      setNotification(`"${trimmedInput}" a été attribué à ${user.name}.`)
      text.clear()
      setUrgentChecked(false)
      handleClose()
    }
  }

  const closeDialog = () => {
    text.clear()
    handleClose()
  }

  return (
    <Dialog open={open} onClose={closeDialog}>

      <DialogTitle>Ajouter une tâche à {user.name}</DialogTitle>

      <DialogContent>

        <DialogContentText>
          Actuellement: {activeTasks.length} en cours, dont {activeAndUrgent.length} urgentes.
          </DialogContentText>

        <TextField
          value={text.input}
          onChange={text.onChange}
          autoFocus
          multiline
          margin="dense"
          variant="filled"
          fullWidth
        />

        <FormControlLabel
          control={
            <Checkbox checked={urgentChecked} onChange={() => setUrgentChecked(!urgentChecked)} />
          }
          label="Urgent"
        />

      </DialogContent>

      <DialogActions>

        <Button onClick={closeDialog}>
          Annuler
        </Button>

        <Button onClick={handleSubmit} disabled={!Boolean(trimmedInput)} variant='contained' color="primary" >
          Ajouter
        </Button>

      </DialogActions>

    </Dialog>
  )
}


