import React from 'react'

import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import DoneIcon from '@material-ui/icons/Done';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';

const TodoListItem = ({ todo, actions, mode }) => {
  const onClick = () => {
    console.log(`clicked onclick`)
    if (mode === 'admin') {
      actions.changeProperty(todo.id, 'urgent', todo.urgent ? false : true)
    }
    else if (mode === 'user') {
      if (todo.completed) {
        actions.undoUserActions(todo.id)
      } else if (!todo.focus) {
        actions.changeProperty(todo.id, 'focus', true)
      } else {
        actions.changeProperty(todo.id, 'completed', true)
      }

    } else {
      console.log(`erreur:mode ni admin ni user`)
    }
  }

  return (<ListItem dense button onClick={onClick}>

    {todo.completed ? <ListItemIcon><DoneIcon color='secondary' /></ListItemIcon> : ''}
    {todo.urgent ? <ListItemIcon><ReportProblemIcon color='secondary' /></ListItemIcon> : ''}
    {todo.focus ? <ListItemIcon><CenterFocusStrongIcon color='secondary' /></ListItemIcon> : ''}
    <ListItemText>{todo.text} &nbsp;&nbsp;</ListItemText>
    {mode === "admin" ?
      <ListItemSecondaryAction> <IconButton onClick={() => actions.deleteTodo(todo.id)}> <DeleteOutlined />   </IconButton>
      </ListItemSecondaryAction> : ''}
  </ListItem>)
}

export default TodoListItem