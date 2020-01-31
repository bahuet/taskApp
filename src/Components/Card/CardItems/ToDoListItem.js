import React, { useState } from "react"
import clsx from "clsx"
import { ListItem, ListItemText, ListItemIcon, Tooltip, Fade } from "@material-ui/core"
import AdminActionIcons from "./AdminActionIcons"
import UserActionIcons from "../CardItems/UserActionIcons"
import TransferTaskDialog from "../../Dialogs/TransferTaskDialog"
import WarningIcon from "@material-ui/icons/Warning"
import './ToDoListItem.css'
import { makeStyles } from "@material-ui/core/styles"
// EN COURS
const useStyles = makeStyles(theme => ({
  // "@keyframes animatedgradient": {
  //   "0%": { backgroundPosition: "100% 50%" },
  //   "50%": { backgroundPosition: "100% 50%" },
  //   "100%": { backgroundPosition: "0% 50% " }
  // },
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

  // focused: {
  //   B: 3,
  //   background: "#1D1F20",
  //   position: "relative",
  //   borderRadius: "var(--borderWidth)",

  //   "&:after": {
  //     content: "''",
  //     position: "absolute",
  //     top: "calc(-1 * var(--borderWidth))",
  //     left: "calc(-1 * var(--borderWidth))",
  //     height: "calc(100% + var(--borderWidth) * 2)",
  //     width: "calc(100% + var(--borderWidth) * 2)",
  //     background:
  //       "linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)",
  //     borderRadius: "calc(2 * var(--borderWidth))",
  //     zIndex: "-1",
  //     animation: "animatedgradient 3s ease alternate infinite",
  //     backgroundSize: "300% 300%"
  //   }
    // width: 0,
    // height: 0,
    // borderStyle: "solid",
    // borderWidth: "50px 0 50px 50px",
    // borderColor: "transparent transparent transparent #007bff"
    // animationName: "$blinker",
    // animationDuration: "4s",
    // animationTimingFunction: "linear",
    // animationIterationCount: "infinite"
  // }
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
    [classes.focused]: todo.focus,
    [classes.completed]: todo.completed
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
        //className={listItemStyle}
        className='focused'
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
          <div
            style={{ visibility: itemFocused ? "visible" : "hidden" }}
            data-testid="icons-container"
          >
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
