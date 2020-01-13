import React, { useState } from 'react'
import AdminActionIcons from './AdminComponents/AdminActionIcons'
import UserActionIcons from './UserComponents/UserActionIcons'
import { makeStyles } from "@material-ui/core/styles"
import { ListItem, ListItemText, ClickAwayListener } from '@material-ui/core'



const useStyles = makeStyles(theme => ({
  multiline: {
    wordWrap: "break-word"
  }
}))


const TodoListItem = ({ todo, actions, admin, setNotification }) => {
  const classes = useStyles()

  const [itemClicked, setItemClicked] = useState(false)

  const handleItemClick = () => setItemClicked(!itemClicked)

  return (
    <ClickAwayListener onClickAway={() => setItemClicked(false)}>

      <ListItem
        button
        dense
        divider
        onClick={handleItemClick}
        selected={itemClicked}
      >

        <ListItemText primary={todo.text} className={classes.multiline} />

        {itemClicked && (
          admin ?
            <AdminActionIcons /> :
            <UserActionIcons />
        )}
      </ListItem>
    </ClickAwayListener>

  )
}

export default TodoListItem