import React from 'react'
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const TodoStatus = ({ todos }) => {
  const total = todos.reduce((a, c) => a + 1, 0)
  const completed = todos.reduce((a, c) => c.completed ? a + 1 : a, 0)
  if (total === 0) {
    return (
      <Typography variant="h6" color='secondary' gutterBottom>
        La liste est vide
      </Typography>
    )
  }

  if (total === completed) {
    return (<Typography variant="h6" style={{ backgroundColor: 'green', color: 'white' }} gutterBottom>
      <CheckCircleIcon /> Bravo! Toutes les tâches sont terminées!
  </Typography>)
  }

  return (

    <Typography variant="h6" color='primary' gutterBottom>
      Liste des chose à faire: ({completed} / {total})
      </Typography>
  )
}

export default TodoStatus