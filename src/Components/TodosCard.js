import React, { useState } from "react"
import AdminActionIcons from './AdminActionIcons'
import UserActionIcons from './UserActionIcons'
import { makeStyles } from "@material-ui/core/styles"
import { red, green } from "@material-ui/core/colors"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import NoteAddIcon from "@material-ui/icons/NoteAdd"

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Avatar,
  IconButton,
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

export default ({ user, userTodos, actions, setNotification, deleteUser, admin }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const openCardMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const closeCardMenu = () => {
    setAnchorEl(null);
  };

  const editName = "Renommer";
  const deleteCard = "Supprimer";
  const options = [editName, deleteCard];

  const handleMenuOptionClick = option => {
    closeCardMenu();
    if (option === editName) {
      console.log(`edit name`);
    } else if (option === deleteCard) {
      console.log(`delete card`);
    }
  };

  const handleCreateTaskClick = () => {
    console.log(`create new task`);
  };

  return (
    <>
      <Card className={classes.card} elevation={3}>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>JS</Avatar>}
          action={
            <IconButton onClick={openCardMenu}>
              <MoreVertIcon />
            </IconButton>
          }
          title={user}
          subheader="Assistant Manager"
        />

        <CardContent>
          <List>
            {userTodos.map((todo, i) => {
              const [isHovering, setIsHovering] = useState(false);

              return (
                <ListItem
                  dense
                  divider
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  selected={isHovering}
                  key={todo.text + i}
                >


                  <ListItemText primary={todo.text} className={classes.multiline} />

                  {isHovering && (
                    admin ?
                      <AdminActionIcons /> :
                      <UserActionIcons />
                  )}


                </ListItem>
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
        {options.map(option => (
          <MenuItem key={option} onClick={() => handleMenuOptionClick(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
