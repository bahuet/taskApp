import React, { useState } from "react"
import clsx from "clsx"

import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Tooltip
} from "@material-ui/core"

import AdminActionIcons from "./AdminActionIcons"
import UserActionIcons from "../CardItems/UserActionIcons"
import TransferTaskDialog from "../../Dialogs/TransferTaskDialog"
import WarningIcon from "@material-ui/icons/Warning"

import { makeStyles } from "@material-ui/core/styles"

// Chantier en cours
// Interdiction de continuer sans son casque
import "./ToDoListItem.css"
const useStyles = makeStyles(theme => ({
  multiline: {
    wordWrap: "break-word"
  },

  listItem: {
    borderRadius: 3
  },
  completed: {
    borderLeft: "solid 1em green"
  },
  focused: {
    position: "relative",
    zIndex: "0",
    borderRadius: ".3em",
    overflow: "hidden",
    "&:before": {
      content: '""',
      position: "absolute",
      zIndex: "-2",
      left: "-50%",
      top: "-50%",
      width: "200%",
      height: "200%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "50% 50%, 50% 50%",
      backgroundPosition: "0 0, 100% 0, 100% 100%, 0 100%",
      backgroundImage:
        "linear-gradient(#2222aa, #2222aa), linear-gradient(#2222aa, #2222aa), linear-gradient(#2222aa, #2222aa), linear-gradient(#2222aa, #2222aa)",
      animation: "rotate 14s linear infinite"
    },
    "&:after": {
      content: '""',
      position: "absolute",
      zIndex: "-1",
      left: ".1em",
      top: ".1em",
      width: "calc(100% - .2em)",
      height: "calc(100% - .2em)",
      background: "white"
    }
  }

  /*"focused": {
    border: "2px solid blue",
    animationName: '$blinker',
    animationDuration: '1.5s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  }, */
}))

const TodoListItem = ({
  todo,
  actions,
  user,
  setFocus,
  admin,
  userList,
  setNotification
}) => {
  const classes = useStyles()
  const [itemFocused, setItemFocus] = useState(false)
  const [transferUserDialogStatus, setTransferUserDialogStatus] = useState(
    false
  )
  const [deleteLock, setDeleteLock] = useState(true)

  const openTransferDialog = () => {
    setTransferUserDialogStatus(true)
  }

  const handleTransfer = userId => {
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
        //className='focused'
        dense
        divider
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {todo.urgent && (
          <Tooltip title="Cette tâche est urgente">
            <ListItemIcon>
              <WarningIcon color="secondary" fontSize="large" />
            </ListItemIcon>
          </Tooltip>
        )}

        <ListItemText primary={todo.text} className={classes.multiline} />
        <div style={{ visibility: itemFocused ? "visible" : "hidden" }}>
          {admin ? (
            <AdminActionIcons
              openTransferDialog={openTransferDialog}
              actions={actions}
              todo={todo}
              user={user}
              userList={userList}
              deleteLock={deleteLock}
              setDeleteLock={setDeleteLock}
              setNotification={setNotification}
            />
          ) : (
            <UserActionIcons
              actions={actions}
              setFocus={setFocus}
              todo={todo}
              setNotification={setNotification}
            />
          )}
        </div>
      </ListItem>

      <TransferTaskDialog
        todo={todo}
        userList={userList}
        user={user}
        open={transferUserDialogStatus}
        closeDialog={() => setTransferUserDialogStatus(false)}
        handleTransfer={handleTransfer}
        setNotification={setNotification}
      />
    </>
  )
}

export default TodoListItem
