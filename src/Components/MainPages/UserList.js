import React from 'react'
import { Link } from 'react-router-dom'

import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Paper, Collapse, IconButton } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'

import CloseIcon from '@material-ui/icons/Close'

const UserList = ({ users }) => {

  const [open, setOpen] = React.useState(true);

  return (
    <div style={{ padding: '1em', margin: '0 0 0 0' }}>

      <Collapse in={open}>
        <Alert severity="warning"
          action={
            <IconButton
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }>
          <AlertTitle>Attention: Page temporaire </AlertTitle>
          Cette page permet d'accéder aux pages individuelles des utilisateurs telle qu'ils la voient quand ils se connectent à leur compte.
          Elle sera supprimée quand le backend sera mis en place
      </Alert>
      </Collapse>

      <List component="nav" >
        {users.userList.map((u, i) => (
          <Paper key={u.id}>

            <ListItem button component={Link} to={`/users/${u.name}`} user={u}>

              <ListItemAvatar>
                <Avatar src={`/img/avatars/${u.avatar}`} />
              </ListItemAvatar>

              <ListItemText primary={u.name} />

            </ListItem>
          </Paper>
        ))}
      </List>
    </div>
  )
}


export default UserList

