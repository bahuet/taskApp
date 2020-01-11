import React from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Paper, Typography } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import { Alert, AlertTitle } from '@material-ui/lab';

import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'


const UserList = ({ users }) => (

  <>
    <Alert severity="warning" variant="outlined">
      <AlertTitle>Attention: Page temporaire </AlertTitle>
      Cette page permet d'accéder aux pages individuelles des utilisateurs telle qu'ils la voient quand ils se connectent à leur compte.
      Elle sera supprimée quand le backend sera mis en place
      </Alert>
    <List component="nav" >
      {users.userList.map((u, i) => (
        <Paper key={u + i}>
          <ListItem button component={Link} to={`/users/${u}`} >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={u} />

          </ListItem>
        </Paper>

      ))}

    </List>
  </>
)


export default UserList

