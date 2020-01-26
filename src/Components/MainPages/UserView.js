import React, { useEffect, useState } from "react"

import TodosCard from "../Card/TodosCard"
import TodoStatus from "../Secondary/TodoStatus"

import { Grid, Snackbar } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import { Alert, AlertTitle } from "@material-ui/lab"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "1em",
    margin: "1em"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center"
  },
  alert: {
    margin: "2em",
    border: "2px solid orange"
  }
}))

export default ({ user, userTodos, actions, setNotification }) => {
  const classes = useStyles()

  //Welcome the user when he enter his page
  const [welcome, setWelcome] = useState("")
  useEffect(() => {
    const firstName = user.name.split(" ")[0]
    setWelcome(firstName)
  }, [user.name])

  const outStandingUrgentTasks = userTodos.filter(x => !x.completed && x.urgent)
  const focusCheck =
    outStandingUrgentTasks.length === 0
      ? false
      : !outStandingUrgentTasks.some(x => x.focus)

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="stretch">
        <Grid item xs={12}>
          <TodoStatus userTodos={userTodos} className={classes.paper} />
        </Grid>

        {focusCheck ? (
          <Grid item xs={12} className={classes.alert}>
            <Alert severity="warning">
              <AlertTitle>Attention</AlertTitle>
              Vous avez des tâches urgentes en attente non focus.
            </Alert>
          </Grid>
        ) : null}
        <Grid item xs={12}>
          <TodosCard
            user={user}
            userTodos={userTodos}
            actions={actions}
            setFocus={actions.setFocusById(user.id)}
            admin={false}
            setNotification={setNotification}
          />
        </Grid>
      </Grid>

      <Snackbar
        open={Boolean(welcome)}
        autoHideDuration={6000}
        onClose={() => setWelcome("")}
      >
        <Alert
          variant="filled"
          onClose={() => setWelcome("")}
          severity="success"
        >
          Bienvenue {welcome} !
        </Alert>
      </Snackbar>
    </div>
  )
}
