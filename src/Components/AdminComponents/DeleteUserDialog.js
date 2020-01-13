import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";

const DeleteUserDialog = ({ deleteUser, setNotification, user, userTodos, open, handleClose }) => {

  const handleConfirm = () => {
    deleteUser()
    handleClose()
    setNotification(`L'utilisateur "${user.name}" et ses ${userTodos.length} taches ont été supprimées`)
  }

  return (
    <>
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
          <Button onClick={handleConfirm} color="secondary" autoFocus>
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteUserDialog