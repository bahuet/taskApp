import React from 'react'
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'


const UserList = ({ users }) => {

  return (
    <List component="nav" >
      {users.userList.map((u, i) => (
        <Link to={`/users/${u}`} key={u + i}>
          <Button  > {u} </Button>

        </Link>
      ))}

    </List>

  )
}

export default UserList

