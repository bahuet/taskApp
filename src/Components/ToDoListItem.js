import React from 'react'

import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, Paper } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

import { green } from '@material-ui/core/colors';

const TodoListItem = ({ todo, actions, mode, setNotification }) => {

  const onClick = () => {
    if (mode === 'admin') {
      actions.changeProperty(todo.id, 'urgent', todo.urgent ? false : true)
      setNotification(`"${todo.text}" a été marqué: ${todo.urgent ? 'Non Urgent' : 'Urgent'} `)
    }
    else if (mode === 'user') {
      if (todo.completed) {
        actions.changeProperty(todo.id, 'focus', false)
        actions.changeProperty(todo.id, 'completed', false)

        setNotification(`"${todo.text}" n'est plus marqué comme terminé.`)

      } else if (!todo.focus) {
        actions.changeProperty(todo.id, 'focus', true)
        setNotification(`"${todo.text}" a été marqué: En cours`)

      } else {
        actions.changeProperty(todo.id, 'completed', true)
        setNotification(`"${todo.text}" a été marqué": Terminée`)

      }
    } else {
      console.log(`erreur: mode ni admin ni user`)
    }
  }
  const deleteClick = (id) => {
    actions.deleteTodo(id)
    setNotification(`"${todo.text}" a été supprimé. `)

  }
  return (

    <ListItem dense button divider onClick={onClick}>

      {todo.completed ? <ListItemIcon><AssignmentTurnedInIcon style={{ color: green[500] }} /></ListItemIcon> : ''}
      {todo.focus ? <ListItemIcon><CenterFocusStrongIcon color='primary' /></ListItemIcon> : ''}
      {todo.urgent ? <ListItemIcon><ReportProblemIcon color='secondary' /></ListItemIcon> : ''}

      <ListItemText>{todo.text} &nbsp;&nbsp;</ListItemText>
      {mode === "admin" ?
        <ListItemSecondaryAction> <IconButton onClick={() => deleteClick(todo.id)}> <DeleteOutlined />   </IconButton>
        </ListItemSecondaryAction> : ''}
    </ListItem>

  )
}

export default TodoListItem