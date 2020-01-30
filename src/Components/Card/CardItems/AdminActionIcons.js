import React from "react"

import { IconButton, Tooltip } from "@material-ui/core"

import ReportProblemIcon from "@material-ui/icons/ReportProblem"
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow"
import DeleteIcon from "@material-ui/icons/Delete"
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined"

export default ({
  openTransferDialog,
  actions,
  todo,
  setNotification,
  deleteLock,
  setDeleteLock
}) => {
  const handleUrgentClick = () => {
    actions.changeProperty(todo.id, "urgent", !todo.urgent)
    setNotification(`"${todo.text}"  ${todo.urgent ? `n'est plus ` : `a été `}marqué Urgent.`)
  }

  const handleDeleteClick = e => {
    if (deleteLock) {
      e.stopPropagation()
      setDeleteLock(false)
    } else {
      actions.deleteTodo(todo.id)
      setNotification(`"${todo.text}" a été supprimé.`)
      setDeleteLock(true)
    }
  }

  const urgentToolTip = todo.urgent ? 'Enlever "Urgent"' : 'Marquer "Urgent"'
  const deleteToolTip = deleteLock ? `Supprimer 🔒` : "Supprimer (action définitive)"

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Tooltip title={urgentToolTip}>
        <IconButton
          edge="start"
          size="small"
          onClick={handleUrgentClick}
          data-testid="urgent-button"
        >
          {todo.urgent ? (
            <ReportProblemOutlinedIcon fontSize="small" />
          ) : (
            <ReportProblemIcon fontSize="small" />
          )}
        </IconButton>
      </Tooltip>

      <Tooltip title="Transférer">
        <IconButton
          edge="start"
          size="small"
          onClick={openTransferDialog}
          data-testid="transfer-button"
        >
          <DoubleArrowIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title={deleteToolTip}>
        <IconButton
          edge="start"
          size="small"
          onClick={handleDeleteClick}
          data-testid="delete-button"
        >
          <DeleteIcon fontSize="small" color={deleteLock ? "inherit" : "secondary"} />
        </IconButton>
      </Tooltip>
    </div>
  )
}
