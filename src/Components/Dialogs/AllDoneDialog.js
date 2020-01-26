import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"

export default ({ open, handleClose, todoList }) => {
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ color: "darkgreen" }}>
          <CheckCircleIcon /> Toutes les tâches sont terminées!
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Les {todoList.length} tâches ont toutes été marquées comme terminées
            par les utilisateurs.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
