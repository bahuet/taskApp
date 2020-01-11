import React from 'react'
import UpIcon from '@material-ui/icons/KeyboardArrowUp'
import { makeStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import { Button } from '@material-ui/core/'


const useStyles = makeStyles(theme => ({

  button: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },

  }
}))


const AlternateCreateTodoForm = () => {
  const classes = useStyles()




  return (
    <Button className={classes.button}>
      <UpIcon />
    </Button>
  )
}

export default AlternateCreateTodoForm