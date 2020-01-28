import React, { useState } from "react"
import clsx from "clsx"
import { ListItem, ListItemText, ListItemIcon, Tooltip, Fade } from "@material-ui/core"
import AdminActionIcons from "./AdminActionIcons"
import UserActionIcons from "../CardItems/UserActionIcons"
import TransferTaskDialog from "../../Dialogs/TransferTaskDialog"
import WarningIcon from "@material-ui/icons/Warning"

import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
  "@keyframes blinker": {
    "0%": { backgroundColor: "rgba(0, 0, 255, .05)" },
    "50%": { backgroundColor: "rgba(0, 0, 255, .15)" },
    "100%": { backgroundColor: "rgba(0, 0, 255, .05)" }
  },
  multiline: {
    wordWrap: "break-word"
  },

  listItem: {
    borderRadius: 3,
    borderLeft: "solid .6em white"
  },
  completed: {
    borderLeft: "solid .6em #348d5e"
  },

  focused: {
    animationName: "$blinker",
    animationDuration: "4s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite"
  }
}))

const TodoListItem = ({ todo, actions, user, setFocus, admin, userList, setNotification }) => {
  const classes = useStyles()
  const [itemFocused, setItemFocus] = useState(false)
  const [transferUserDialogStatus, setTransferUserDialogStatus] = useState(false)
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
        <Fade in={itemFocused}>
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
        </Fade>
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
