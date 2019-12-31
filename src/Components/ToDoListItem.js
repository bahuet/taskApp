import React from 'react'

import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import DoneIcon from '@material-ui/icons/Done';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';

const TodoListItem = ({ todo, mode, deleteTodo, setUrgent, setNotUrgent, setFocused, setNotFocused, setCompleted, setNotCompleted, undoUserActions }) => {

  const onClick = () => {
    if (mode === 'admin') {
      todo.urgent ? setNotUrgent() : setUrgent()
    }
    else if (mode === 'user') {
      if (todo.completed) {
        undoUserActions()
      } else if (!todo.focus) {
        setFocused()
      } else {
        setCompleted()
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
      <ListItemSecondaryAction> <IconButton onClick={deleteTodo}> <DeleteOutlined />   </IconButton>
      </ListItemSecondaryAction> : ''}
  </ListItem>)
}

export default TodoListItem