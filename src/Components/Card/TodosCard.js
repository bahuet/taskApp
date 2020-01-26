import React, { useState } from "react"

import TodoCardMenu from "./TodoCardMenu"
import TodoListItem from "./CardItems/ToDoListItem"
import CreateTaskDialog from "../Dialogs/CreateTaskDialog"

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  List,
  Avatar,
  IconButton,
  Tooltip,
  Typography
} from "@material-ui/core"

import MoreVertIcon from "@material-ui/icons/MoreVert"
import NoteAddIcon from "@material-ui/icons/NoteAdd"

import { makeStyles } from "@material-ui/core/styles"

export default ({
  user,
  userTodos,
  actions,
  deleteUser,
  editUser,
  setFocus,
  admin,
  userList,
  setNotification
}) => {
  const useStyles = makeStyles(theme => ({
    card: {
      width: admin ? 345 : ""
    },
    avatar: {
      width: theme.spacing(6),
      height: theme.spacing(6)
    },
    multiline: {
      wordWrap: "break-word"
    },
    right: {
      marginLeft: "auto"
    }
  }))

  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const openCardMenu = event => {
    setAnchorEl(event.currentTarget)
  }
  const closeCardMenu = () => {
    setAnchorEl(null)
  }

  const [createTaskStatus, setCreateTaskStatus] = useState(false)
  const [mouseOverNewTaskButton, setMouseOverNewTaskButton] = useState(false)
  //const avatarUrl = require(`src/assets/img/avatars/${user.avatar}`)
  const avatarUrl = `/img/avatars/${user.avatar}`
  const TooltipText = `Ajouter une tâche à ${user.name}`

  return (
    <>
      <Card className={classes.card} elevation={3}>
        <CardHeader
          avatar={<Avatar className={classes.avatar} src={avatarUrl} />}
          action={
            admin && (
              <IconButton onClick={openCardMenu}>
                <MoreVertIcon />
              </IconButton>
            )
          }
          title={user.name}
          subheader={user.role}
        />

        <CardContent>
          {userTodos.length ? (
            <List>
              {userTodos.map((todo, i) => {
                return (
                  <TodoListItem
                    todo={todo}
                    admin={admin}
                    actions={actions}
                    setFocus={() => setFocus(todo.id)}
                    userList={userList}
                    user={user}
                    setNotification={setNotification}
                    key={todo + i}
                  />
                )
              })}
            </List>
          ) : (
            <Typography color="textSecondary">
              {admin
                ? "Cet utilisateur n'a pas de tâches"
                : "Vous n'avez pas de tâche assignée"}
            </Typography>
          )}
        </CardContent>

        {admin && (
          <CardActions>
            <Tooltip title={TooltipText}>
              <IconButton
                onClick={() => setCreateTaskStatus(true)}
                className={classes.right}
                onMouseEnter={() => setMouseOverNewTaskButton(true)}
                onMouseLeave={() => setMouseOverNewTaskButton(false)}
              >
                <NoteAddIcon
                  fontSize="large"
                  style={mouseOverNewTaskButton ? { color: "darkgreen" } : {}}
                />
              </IconButton>
            </Tooltip>
          </CardActions>
        )}
      </Card>
      <TodoCardMenu
        closeCardMenu={closeCardMenu}
        anchorEl={anchorEl}
        deleteUser={deleteUser}
        editUser={editUser}
        user={user}
        userTodos={userTodos}
        setNotification={setNotification}
      />
      <CreateTaskDialog
        user={user}
        open={createTaskStatus}
        handleClose={() => setCreateTaskStatus(false)}
        userTodos={userTodos}
        actions={actions}
        setNotification={setNotification}
      />
    </>
  )
}
