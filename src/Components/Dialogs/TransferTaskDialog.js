import React, { useState } from "react"
import Autocomplete from "@material-ui/lab/Autocomplete"

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@material-ui/core"

export default ({ todo, open, handleTransfer, closeDialog, user, userList }) => {
  const [selection, setSelection] = useState("")

  const handleChange = (_, value) => {
    setSelection(value ? value.id : "")
  }

  const handleClose = () => {
    closeDialog()
  }

  const handleConfirm = () => {
    handleTransfer(selection)
    closeDialog()
    setSelection("")
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{`Transfert de tâche`}</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Choisissez l'utilisateur à qui transférer la tâche: "{todo.text}"
        </DialogContentText>

        <Autocomplete
          options={userList ? userList.filter(u => u.name !== user.name) : []}
          getOptionLabel={user => ` ${user.name}  (${user.role})`}
          style={{ width: 300 }}
          onChange={(_, value) => handleChange(_, value)}
          renderInput={params => (
            <>
              <TextField {...params} variant="outlined" fullWidth />
            </>
          )}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>

        <Button
          onClick={handleConfirm}
          variant="contained"
          disabled={!Boolean(selection)}
          color="secondary"
          autoFocus
        >
          Transférer
        </Button>
      </DialogActions>
    </Dialog>
  )
}
