import React, { useState } from 'react'
import AdminActionIcons from './AdminComponents/AdminActionIcons'
import UserActionIcons from './UserComponents/UserActionIcons'
import TransferTaskDialog from './AdminComponents/TransferTaskDialog'
import clsx from 'clsx'

import { makeStyles } from "@material-ui/core/styles"
import { ListItem, ListItemText, ClickAwayListener, Checkbox, ListItemIcon } from '@material-ui/core'
import { green } from '@material-ui/core/colors';
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


  const openTransferDialog = () => {
    setTransferUserDialogStatus(true)
  }

  const handleTransfer = (userId) => {
    const userName = userList.find(u => u.id === userId).name
    actions.transferTodo(todo.id, userId, userName)

    setNotification(`Tâche transférée de ${todo.userName} à ${userName}`)
  }

  const listItemStyle = clsx({
    [classes.listItem]: true,
    [classes.completed]: todo.completed,
    [classes.focused]: todo.focus
  })

  return (
    <>
      <ClickAwayListener onClickAway={() => setItemFocus(false)}>
        <ListItem
          className={listItemStyle}

          dense
          divider
          onMouseEnter={() => setItemFocus(true)}
          onMouseLeave={() => setItemFocus(false)}
          selected={itemFocused}
        >

          {todo.urgent && <ListItemIcon >
            <WarningIcon color='secondary' />
          </ListItemIcon>}

          <ListItemText primary={todo.text} className={classes.multiline} />
          <div style={{ visibility: itemFocused ? 'visible' : 'hidden' }}>

            {admin ?
              <AdminActionIcons openTransferDialog={openTransferDialog} actions={actions}
                todo={todo} user={user} userList={userList} setNotification={setNotification} /> :
              <UserActionIcons actions={actions} setFocus={setFocus} todo={todo} setNotification={setNotification} />
            }
          </div>

        </ListItem>

      </ClickAwayListener>
      <TransferTaskDialog todo={todo} userList={userList} user={user}
        open={transferUserDialogStatus} closeDialog={() => setTransferUserDialogStatus(false)}
        handleTransfer={handleTransfer} setNotification={setNotification} />
    </>

  )
}

export default TodoListItem