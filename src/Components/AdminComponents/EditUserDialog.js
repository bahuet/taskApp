import React, { useState } from 'react'
import useInput from '../../useHooks/useInput'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem } from "@material-ui/core";

export default ({ open, closeDialog, editUser, user, closeCardMenu, setNotification }) => {

  const nameField = useInput(user.name)
  const roleField = useInput(user.role)

  const handleClose = () => {
    closeDialog()
    closeCardMenu()
    nameField.clear(user.name)
    roleField.clear(user.role)
  }
  const handleConfirm = () => {
    editUser(nameField.input, roleField.input)
    closeDialog()
    closeCardMenu()
    setNotification(`L'utilisateur a été modifié ! Nouvelles valeurs: ${nameField.input} : ${roleField.input}`)
  }


  return (
    <>


      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{`Modifier le nom et le rôle de ${user.name}`}</DialogTitle>
        <DialogContent>
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
            <Button onClick={handleConfirm} variant="contained" color="primary" autoFocus>
              Confirmer
          </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  )
}

