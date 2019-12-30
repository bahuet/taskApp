import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'


const UserList = ({ users }) => {
  console.log(`userlist props 'user' => ${JSON.stringify(users)}`)

  return (
    <List component="nav" >
      {users.map((u, i) => (
        <ListItem button key={u.user + i}>
          <ListItemText primary={u.user} />
        </ListItem>
      ))}

    </List>

  )
}

export default UserList

