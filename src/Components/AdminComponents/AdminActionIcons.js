import React, { useState } from 'react'
import {
  IconButton,
} from "@material-ui/core";
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import DeleteIcon from "@material-ui/icons/Delete";
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';

export default ({ openTransferDialog, actions, todo, setNotification }) => {
  const [deleteLock, setDeleteLock] = useState(true)
  const handleUrgentClick = () => {
    actions.changeProperty(todo.id, 'urgent', !todo.urgent)
    setNotification(`"${todo.text}" a été marqué "Urgent".`)
  };


  const handleDeleteClick = (e) => {
    if (deleteLock) {
      e.stopPropagation()
      setDeleteLock(false)
    } else {
      actions.deleteTodo(todo.id)
      setNotification(`"${todo.text}" a été supprimé.`)
    }

  };

  return (
    <div>
      <IconButton onClick={handleUrgentClick}>
        <ReportProblemIcon fontSize="small" />
      </IconButton>{" "}
      <IconButton onClick={openTransferDialog}>
        <DoubleArrowIcon fontSize="small" />
      </IconButton>{" "}
      {deleteLock ?
        <IconButton onClick={handleDeleteClick} >
          <DeleteIcon fontSize="small" /> (<LockIcon fontSize='small' />)
        </IconButton> :
        <IconButton onClick={handleDeleteClick} >
          <DeleteIcon color='secondary' fontSize="small" /> (<LockOpenIcon fontSize="small" />)
        </IconButton>}
    </div>
  )
}
