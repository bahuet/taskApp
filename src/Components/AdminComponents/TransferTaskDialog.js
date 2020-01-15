import React, { useState } from 'react'
import Autocomplete from "@material-ui/lab/Autocomplete";

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";

export default ({ todo, open, handleTransfer, closeDialog, user, userList, setNotification }) => {
  const [selection, setSelection] = useState('')
  const handleChange = (_, value) => {
    setSelection(value.id)
  };
  const handleClose = () => {
    closeDialog()
  }

  const handleConfirm = () => {
    handleTransfer(selection)
    closeDialog()
  }

  return (

    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>{`Transfer de tâche`}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Choisissez l'utilisateur à qui transférer la tâche: "{todo.text}"
          </DialogContentText>
        <Autocomplete
          options={userList}
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
        <Button onClick={handleClose} >
          Annuler
          </Button>
        <Button onClick={handleConfirm}  variant="contained" color="secondary" autoFocus disabled={!Boolean(selection)} >
          Transférer
          </Button>
      </DialogActions>
    </Dialog>

  )
}

