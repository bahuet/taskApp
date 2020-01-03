import React from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Paper} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'


const UserList = ({ users }) => {

  return (
    <Paper>
      <List component="nav" >
        {users.userList.map((u, i) => (
          <ListItem component={Link} to={`/users/${u}`} button key={u + i}>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={u} />
          </ListItem>

        ))}

      </List>
    </Paper>
  )
}

export default UserList

