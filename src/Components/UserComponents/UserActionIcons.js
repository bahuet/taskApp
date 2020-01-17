import React from 'react'
import {
  IconButton,
} from "@material-ui/core";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

export default ({ actions, todo, setFocus, setNotification }) => {
  const handleFocusClick = () => {
    setFocus()
    setNotification(`"${todo.text}" ${todo.focus ? `n'est plus` : `a été`} marqué "En Cours".`)

  };
  const handleCompletedClick = () => {
    actions.changeProperty(todo.id, 'completed', !todo.completed)
    setNotification(`"${todo.text}" a été marqué "Terminé".`)

  };


  return (
    <div>
      <IconButton size='small' onClick={handleFocusClick}>
        <CenterFocusStrongIcon fontSize="small" />
      </IconButton>
      <IconButton size='small' onClick={handleCompletedClick}>
        <AssignmentTurnedInIcon fontSize="small" />
      </IconButton>
    </div>
  )
}
