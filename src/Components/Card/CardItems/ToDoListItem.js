import React, { useState } from 'react'
import AdminActionIcons from './AdminActionIcons'
import UserActionIcons from '../CardItems/UserActionIcons'
import TransferTaskDialog from '../../Dialogs/TransferTaskDialog'
import clsx from 'clsx'

import { makeStyles } from "@material-ui/core/styles"
import { ListItem, ListItemText, ClickAwayListener, Checkbox, ListItemIcon, Tooltip } from '@material-ui/core'
import WarningIcon from '@material-ui/icons/Warning'

const useStyles = makeStyles(theme => ({
  '@keyframes blinker': {
    '0%': { borderColor: 'rgba(0, 0, 255, .2)' },
    '50%': { borderColor: 'rgba(0, 0, 255, .7)' },
    '100%': { borderColor: 'rgba(0, 0, 255, .2)' },
  },
  multiline: {
    wordWrap: "break-word"
  },
  listItem: {
    borderRadius: 3

  },
  completed: {
    backgroundImage: 'linear-gradient(to right, rgba(15, 184, 68, .3), rgba(23, 135, 58, .08))',
  },

  "focused": {
    border: "2px solid blue",
    animationName: '$blinker',
    animationDuration: '1.5s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },

}))

const TodoListItem = ({ todo, actions, user, setFocus, admin, userList, setNotification }) => {
  const classes = useStyles()

  const [itemFocused, setItemFocus] = useState(false)
  const [transferUserDialogStatus, setTransferUserDialogStatus] = useState(false)

  const [deleteLock, setDeleteLock] = useState(true)

  const openTransferDialog = () => {
    setTransferUserDialogStatus(true)
  }

  const handleTransfer = (userId) => {
    const userName = userList.find(u => u.id === userId).name
    actions.transferTodo(todo.id, userId, userName)

    setNotification(`Tâche transférée de ${todo.userName} à ${userName}`)
  }
  // clsx pour faire du css dynamique
  const listItemStyle = clsx({
    [classes.listItem]: true,
    [classes.completed]: todo.completed,
    [classes.focused]: todo.focus
  })

  const handleEnter = () => {
    setItemFocus(true)
  }

  const handleLeave = () => {
    setItemFocus(false)
    setDeleteLock(true)

  }
  return (
    <>
      <ListItem
        className={listItemStyle}

        dense
        divider
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        selected={itemFocused}
      >

        {todo.urgent && <Tooltip title="Cette tâche est urgente">
          <ListItemIcon >
            <WarningIcon color='secondary' fontSize='large' />
          </ListItemIcon></Tooltip>}

        <ListItemText primary={todo.text} className={classes.multiline} />
        <div style={{ visibility: itemFocused ? 'visible' : 'hidden' }}>

          {admin ?
            <AdminActionIcons openTransferDialog={openTransferDialog} actions={actions}
              todo={todo} user={user} userList={userList} deleteLock={deleteLock} setDeleteLock={setDeleteLock} setNotification={setNotification} /> :
            <UserActionIcons actions={actions} setFocus={setFocus} todo={todo} setNotification={setNotification} />
          }
        </div>

      </ListItem>

      <TransferTaskDialog todo={todo} userList={userList} user={user}
        open={transferUserDialogStatus} closeDialog={() => setTransferUserDialogStatus(false)}
        handleTransfer={handleTransfer} setNotification={setNotification} />
    </>

  )
}

export default TodoListItem