import React, { useState } from "react"
import TodoCardMenu from './AdminComponents/TodoCardMenu'
import TodoListItem from './ToDoListItem'

import { makeStyles } from "@material-ui/core/styles"
import { red, green } from "@material-ui/core/colors"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import NoteAddIcon from "@material-ui/icons/NoteAdd"

import CreateTask from './AdminComponents/CreateTask'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemText,
  Avatar,
  IconButton,
  ClickAwayListener,
  Button
} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  multiline: {
    wordWrap: "break-word"
  },

}))

export default ({ user, userTodos, actions, deleteUser, editUser, setFocus, admin, userList, setNotification }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const openCardMenu = event => {
    setAnchorEl(event.currentTarget);
  }

  const closeCardMenu = () => {
    setAnchorEl(null);
  }
  //const avatarUrl = require(`src/assets/img/avatars/${user.avatar}`)
  const avatarUrl = `/img/avatars/${user.avatar}`

  return (
    <>
      <Card className={classes.card} elevation={3}>
        <CardHeader
          avatar={<Avatar className={classes.avatar} src={avatarUrl} />}
          action={
            admin && <IconButton onClick={openCardMenu}>
              <MoreVertIcon />
            </IconButton>
          }
          title={user.name}
          subheader={user.role}
        />

        <CardContent>
          {userTodos.length ?
            <List>
              {userTodos.map((todo, i) => {
                return (
                  <TodoListItem todo={todo} admin={admin} actions={actions}
                    setFocus={() => setFocus(todo.id)} userList={userList} user={user}
                    setNotification={setNotification} key={todo + i} />
                )
              })}
            </List>
            : `Cet utilisateur n'a pas de tâches`}
        </CardContent>

        {admin && <CardActions>
          <CreateTask user={user} userTodos={userTodos} actions={actions}
            setNotification={setNotification} />
        </CardActions>}
      </Card>
      <TodoCardMenu closeCardMenu={closeCardMenu} anchorEl={anchorEl}
        deleteUser={deleteUser} editUser={editUser} user={user} userTodos={userTodos}
        setNotification={setNotification} />

    </>
  );
};
