import React from 'react'
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'


const UserList = ({ users }) => {
  console.log(`userlist props 'user' => ${JSON.stringify(users)}`)

  return (
    <List component="nav" >
      {users.map((u, i) => (
        <Link to={`/users/${u.username}`} key={u.username + i}>
          <Button  > {u.username} </Button>

        </Link>
      ))}

    </List>

  )
}

export default UserList

