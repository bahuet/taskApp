import React, { useState } from 'react'
import DeleteUserDialog from './DeleteUserDialog'
import EditUserDialog from './EditUserDialog'

import {
  Menu,
  MenuItem,
  MenuList
} from "@material-ui/core";


export default ({ closeCardMenu, anchorEl, deleteUser, editUser, user, userTodos, setNotification }) => {

  const DELETE_USER = "Supprimer l'utilisateur"
  const EDIT_USER = "Modifier l'utilisateur"

  const [deleteUserDialogStatus, setDeleteUserDialogStatus] = useState(false)
  const [editUserDialogStatus, setEditUserDialogStatus] = useState(false)

  const open = Boolean(anchorEl)

  return (
    <>
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
        <MenuItem onClick={() => setEditUserDialogStatus(true)}>
          {EDIT_USER}
        </MenuItem>
        <MenuItem onClick={() => setDeleteUserDialogStatus(true)}>
          {DELETE_USER}
        </MenuItem>

      </Menu>
      <EditUserDialog open={editUserDialogStatus} closeDialog={() => setEditUserDialogStatus(false)}
        editUser={editUser} user={user} closeCardMenu={closeCardMenu}
        setNotification={setNotification} />
      <DeleteUserDialog open={deleteUserDialogStatus} closeDialog={() => setDeleteUserDialogStatus(false)}
        deleteUser={deleteUser} user={user} userTodos={userTodos} closeCardMenu={closeCardMenu}
        setNotification={setNotification} />

    </>
  )
}

