import React, { useState } from 'react'
import {
  IconButton,
} from "@material-ui/core";
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import DeleteIcon from "@material-ui/icons/Delete";

export default ({ openTransferDialog, actions, todo, setNotification }) => {

  const handleUrgentClick = () => {
    actions.changeProperty(todo.id, 'urgent', !todo.urgent)
    setNotification(`"${todo.text}" a été marqué "Urgent".`)

  };


  const handleDeleteClick = () => {
    actions.deleteTodo(todo.id)
    setNotification(`"${todo.text}" a été supprimé.`)
  };

  return (
    <div>
      <IconButton onClick={handleUrgentClick}>
        <ReportProblemIcon fontSize="small" />
      </IconButton>{" "}
      <IconButton onClick={openTransferDialog}>
        <DoubleArrowIcon fontSize="small" />
      </IconButton>{" "}
      <IconButton onClick={handleDeleteClick}>
        <DeleteIcon fontSize="small" />
      </IconButton>

    </div>
  )
}
