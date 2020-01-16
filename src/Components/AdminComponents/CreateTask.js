
import React, { useState } from 'react';
import useInput from '../../useHooks/useInput'
import { makeStyles } from "@material-ui/core/styles"

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemText,
  Avatar,
  IconButton,
  ClickAwayListener,
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
import NoteAddIcon from "@material-ui/icons/NoteAdd"

const useStyles = makeStyles(theme => ({
  right: {
    marginLeft: "auto"
  },
}))

export default ({ user, userTodos, actions, setNotification }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [urgentChecked, setUrgentChecked] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const text = useInput()

  const activeTasks = userTodos.filter(x => !x.completed)
  const activeAndUrgent = activeTasks.filter(x => x.urgent)

  const handleSubmit = () => {
    const trimmedInput = text.input.trim()
    if (trimmedInput) {
      actions.addTodo(user.id, user.name, trimmedInput, urgentChecked)
      setNotification(`"${trimmedInput}" a été attribué à ${user.name}.`)
      text.clear()
      setUrgentChecked(false)
      handleClose()
    }
  }

  return (
    <div className={classes.right}>
      <IconButton onClick={handleClickOpen} >
        <NoteAddIcon fontSize="large" />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
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
          <Button onClick={handleClose}>
            Annuler
              </Button>

          <Button onClick={handleSubmit} color="primary" >
            Ajouter
              </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}


