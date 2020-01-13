import React, { useState } from 'react'
import DeleteUserDialog from './DeleteUserDialog'
import EditUserDialog from './EditUserDialog'

import {
  Menu,
  MenuItem,
} from "@material-ui/core";


export default ({ closeCardMenu, anchorEl, deleteUser, editUser, user, userTodos, setNotification }) => {

  const open = Boolean(anchorEl)
  const editName = "Modifier"
  const deleteCard = "Supprimer"

  const handleMenuOptionClick = option => {
    closeCardMenu();
    if (option === editName) {
      setEditUserDialogStatus(true)
    } else if (option === deleteCard) {
      setDeleteUserDialogStatus(true)
    }
  }

  const [deleteUserDialogStatus, setDeleteUserDialogStatus] = useState(false)
  const [editUserDialogStatus, setEditUserDialogStatus] = useState(false)

  return (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={closeCardMenu}
      PaperProps={{
        style: {
          maxHeight: 48 * 4.5,
          width: 200
        }
      }}
    >

      <MenuItem onClick={() => handleMenuOptionClick(editName)}>
        {editName}
      </MenuItem>
      <MenuItem onClick={() => handleMenuOptionClick(deleteCard)}>
        {deleteCard}
      </MenuItem>
      <DeleteUserDialog open={deleteUserDialogStatus} handleClose={() => setDeleteUserDialogStatus(false)}
        deleteUser={deleteUser} user={user} userTodos={userTodos} setNotification={setNotification} />
      <EditUserDialog open={editUserDialogStatus} closeDialog={() => setEditUserDialogStatus(false)}
        editUser={editUser} user={user} setNotification={setNotification} />
    </Menu>


  )
}