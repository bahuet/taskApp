import React from 'react'
import {
  IconButton, Tooltip
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
  const focusTooltip = todo.focus ? 'Enlever "En Cours"' : 'Marquer "En cours"'
  const completedTooltip = todo.completed ? 'Enlever "Terminé"' : 'Marquer "Terminé"'

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

      <Tooltip title={focusTooltip}>
        <IconButton size='small' onClick={handleFocusClick}>
          <CenterFocusStrongIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title={completedTooltip}>
        <IconButton size='small' onClick={handleCompletedClick}>
          <AssignmentTurnedInIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </div>
  )
}
