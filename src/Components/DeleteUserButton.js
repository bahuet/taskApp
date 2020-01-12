import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";

const DeleteUserButton = ({ deleteUser, setNotification, user, userTodos }) => {

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  const handleConfirm = () => {
    deleteUser()
    setNotification(`L'utilisateur "${user}" et ses ${userTodos.length} taches ont été supprimées`)
  }

  return (
    <>
      <Button color="secondary" variant="outlined" size='small'
        onClick={handleClickOpen}> Supprimer</Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{`Confirmer la suppression de ${user}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Les {userTodos.length} tâches assignées seront également supprimées.
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