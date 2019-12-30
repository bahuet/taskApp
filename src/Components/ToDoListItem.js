import React from 'react'

import { Switch } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import DoneIcon from '@material-ui/icons/Done';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const TodoListItem = ({ toggleTodoCompletion, deleteTodo, x, index }) => {

  return (<ListItem dense button
    onClick={() => toggleTodoCompletion(index)}>
    {x.completed ? <ListItemIcon><DoneIcon color='secondary' /></ListItemIcon> : ''}
    <Switch name='taskCompleted' type='checkbox' checked={x.completed} />
    <ListItemText>{x.text} &nbsp;&nbsp;</ListItemText>
    <ListItemSecondaryAction> <IconButton aria-label="delete" onClick={() => deleteTodo(index)}> <DeleteOutlined />   </IconButton>
    </ListItemSecondaryAction>
  </ListItem>)
}

export default TodoListItem