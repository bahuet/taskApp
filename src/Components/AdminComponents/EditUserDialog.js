import React from 'react'
import useInput from '../../useHooks/useInput'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";

const EditUserDialog = ({ editUser, setNotification, user, open, closeDialog }) => {
  const nameField = useInput(user.name)
  const roleField = useInput(user.role)

  const handleConfirm = () => {
    editUser(nameField.input, roleField.input)
    closeDialog()
    setNotification(`L'utilisateur a été modifié ! Nouvelles valeurs: ${nameField.input} : ${roleField.input}`)
  }

  const handleClose =  () => {
    closeDialog()
    nameField.clear(user.name)
    roleField.clear(user.role)
  }
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{`Modifier le nom et le rôle de ${user.name}`}</DialogTitle>
        <DialogContent>

        </DialogContent>
        <TextField
          value={nameField.input}
          onChange={nameField.onChange}
          margin="dense"
          fullWidth
        />
        <TextField
          value={roleField.input}
          onChange={roleField.onChange}
          margin="dense"
          fullWidth
        />
        <DialogActions>
          <Button onClick={handleClose} >
            Annuler
          </Button>
          <Button onClick={handleConfirm} color="secondary" autoFocus>
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default EditUserDialog