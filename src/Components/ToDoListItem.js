import React, { useState } from 'react'

import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import DoneIcon from '@material-ui/icons/Done';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';

const TodoListItem = ({ todo, actions, mode, setStatus }) => {



  const onClick = () => {
    if (mode === 'admin') {
      actions.changeProperty(todo.id, 'urgent', todo.urgent ? false : true)
      setStatus(`"${todo.text}" a été marqué: ${todo.urgent ? 'Non Urgent' : 'Urgent'} `)
    }
    else if (mode === 'user') {
      if (todo.completed) {
        actions.undoUserActions(todo.id)
        setStatus(`"${todo.text}" n'est plus marqué comme terminé. `)

      } else if (!todo.focus) {
        actions.changeProperty(todo.id, 'focus', true)
        setStatus(`"${todo.text}" a été marqué: En cours`)

      } else {
        actions.changeProperty(todo.id, 'completed', true)
        setStatus(`"${todo.text}" a été marqué":" Terminée`)

      }

    } else {
      console.log(`erreur: mode ni admin ni user`)
    }
  }
  const deleteClick = (id) => {
    actions.deleteTodo(id)
    setStatus(`"${todo.text}" a été supprimé. `)

  }
  return (
    <>
      <ListItem dense button onClick={onClick}>

        {todo.completed ? <ListItemIcon><DoneIcon color='secondary' /></ListItemIcon> : ''}
        {todo.urgent ? <ListItemIcon><ReportProblemIcon color='secondary' /></ListItemIcon> : ''}
        {todo.focus ? <ListItemIcon><CenterFocusStrongIcon color='secondary' /></ListItemIcon> : ''}
        <ListItemText>{todo.text} &nbsp;&nbsp;</ListItemText>
        {mode === "admin" ?
          <ListItemSecondaryAction> <IconButton onClick={() => deleteClick(todo.id)}> <DeleteOutlined />   </IconButton>
          </ListItemSecondaryAction> : ''}
      </ListItem>

    </>
  )
}

export default TodoListItem