import React, { useState } from 'react'
import AdminActionIcons from './AdminComponents/AdminActionIcons'
import UserActionIcons from './UserComponents/UserActionIcons'
import TransferTaskDialog from './AdminComponents/TransferTaskDialog'

import { makeStyles } from "@material-ui/core/styles"
import { ListItem, ListItemText, ClickAwayListener, Checkbox } from '@material-ui/core'
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  multiline: {
    wordWrap: "break-word"
  }
}))

const TodoListItem = ({ todo, actions, user, setFocus, admin, userList, setNotification }) => {
  const classes = useStyles()

  const [itemClicked, setItemClicked] = useState(false)
  const [transferUserDialogStatus, setTransferUserDialogStatus] = useState(false)

  const handleItemClick = () => setItemClicked(!itemClicked)

  const openTransferDialog = () => {
    setTransferUserDialogStatus(true)
  }

  const handleTransfer = (userId) => {
    const userName = userList.find(u => u.id === userId).name
    actions.transferTodo(todo.id, userId, userName)

    setNotification(`Tâche transférée de ${todo.userName} à ${userName}`)
  }

  return (
    <>
      <ClickAwayListener onClickAway={() => setItemClicked(false)}>
        <ListItem
          button
          dense
          divider
          onClick={handleItemClick}
          selected={itemClicked}
        >
          <Checkbox
            checked={todo.completed}
            style={{ color: green[500] }}
          />
          <Checkbox
            checked={todo.urgent}
          />
          <Checkbox
            checked={todo.focus}
            color='secondary'
          />
          <ListItemText primary={todo.text} className={classes.multiline} />

          {itemClicked && (
            admin ?
              <AdminActionIcons openTransferDialog={openTransferDialog} actions={actions}
                todo={todo} user={user} userList={userList} setNotification={setNotification} /> :
              <UserActionIcons actions={actions} setFocus={setFocus} todo={todo} setNotification={setNotification} />
          )}


        </ListItem>

      </ClickAwayListener>
      <TransferTaskDialog todo={todo} userList={userList} user={user}
        open={transferUserDialogStatus} closeDialog={() => setTransferUserDialogStatus(false)}
        handleTransfer={handleTransfer} setNotification={setNotification} />
    </>

  )
}

export default TodoListItem