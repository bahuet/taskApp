
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useInput from '../../useHooks/useInput'

const CreateTodoFormButton = ({ user, userTodos, actions, setNotification }) => {
  const [open, setOpen] = React.useState(false);

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
      actions.addTodo(user, trimmedInput)
      setNotification(`"${trimmedInput}" a été attribué à ${user}.`)
      text.clear()
      handleClose()
    }
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Ajouter une tâche
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter une tâche à {user}</DialogTitle>
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
    </div>
  );
}


export default CreateTodoFormButton