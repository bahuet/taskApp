import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";

const DeleteUserButton = ({ deleteUser, setNotification, user }) => {

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  const handleConfirm = () => {
    deleteUser()
    setNotification(`L'utilisateur "${user}" et ses taches ont été supprimées`)
  }

  return (
    <>
      <Button color="secondary" variant="outlined" size='small'
        onClick={handleClickOpen}> Supprimer</Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{`Supprimer ${user} ?`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Toutes les tâches associées seront également supprimées.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >
            Annuler
          </Button>
          <Button onClick={handleConfirm} color="secondary" autoFocus>
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteUserButton