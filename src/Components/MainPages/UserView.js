import React from 'react'

import TodosCard from '../Card/TodosCard'
import TodoStatus from '../Secondary/TodoStatus'

import { Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '3em',
    margin: '2em',

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))


export default ({ user, userTodos, actions, setNotification }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch">

        <Grid item xs={12}>
          <TodoStatus userTodos={userTodos} className={classes.paper} />
        </Grid>

        <Grid item xs={12} >
          <TodosCard user={user} userTodos={userTodos} actions={actions}
            setFocus={actions.setFocusById(user.id)}
            admin={false} setNotification={setNotification}
          />
        </Grid>

      </Grid>
    </div>
  )
}