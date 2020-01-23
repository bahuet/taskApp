import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";

export default ({ open, closeDialog, deleteUser, user, userTodos, closeCardMenu, setNotification }) => {

  const handleClose = () => {
    closeDialog()
    closeCardMenu()
  }

  const handleConfirm = () => {
    deleteUser()
    closeDialog()
    closeCardMenu()
    setNotification(`L'utilisateur "${user.name}" et ses ${userTodos.length} taches ont été supprimées`)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >

      <DialogTitle>{`Confirmer la suppression de ${user.name}`}</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Les {userTodos.length} tâches assignées seront également supprimées.
          </DialogContentText>
      </DialogContent>

      <DialogActions>

        <Button onClick={handleClose} >
          Annuler
        </Button>

        <Button onClick={handleConfirm} variant="contained" color="secondary" autoFocus>
          Supprimer
        </Button>

      </DialogActions>
    </Dialog>
  )
}