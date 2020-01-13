import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { red, green } from "@material-ui/core/colors"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import NoteAddIcon from "@material-ui/icons/NoteAdd"
import TodoCardMenu from './AdminComponents/TodoCardMenu'
import TodoListItem from './ToDoListItem'
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
    backgroundColor: red[500]
  },
  right: {
    marginLeft: "auto"
  },
  multiline: {
    wordWrap: "break-word"
  }
}));

export default ({ user, userTodos, actions, setNotification, deleteUser, editUser, admin }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const openCardMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const closeCardMenu = () => {
    setAnchorEl(null);
  };


  const handleCreateTaskClick = () => {
    console.log(`create new task`);
  };



  return (
    <>
      <Card className={classes.card} elevation={3}>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>{user.name[0]}</Avatar>}
          action={
            <IconButton onClick={openCardMenu}>
              <MoreVertIcon />
            </IconButton>
          }
          title={user.name}
          subheader={user.role}
        />

        <CardContent>
          <List>

            {userTodos.map((todo, i) => {

              return (
                <TodoListItem todo={todo} admin={admin} actions={actions} setNotification={setNotification} key={todo + i} />
              )
            })}
          </List>
        </CardContent>
        <CardActions>
          <IconButton className={classes.right} onClick={handleCreateTaskClick}>
            <NoteAddIcon fontSize="large" />
          </IconButton>
        </CardActions>
      </Card>
      <TodoCardMenu closeCardMenu={closeCardMenu} anchorEl={anchorEl}
        deleteUser={deleteUser} editUser={editUser} user={user} userTodos={userTodos}
        setNotification={setNotification} />

    </>
  );
};
