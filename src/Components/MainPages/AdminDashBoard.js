import React, { useState } from "react"

import BarChart from "../Secondary/BarChart"
import ProgressBar from "../Secondary/ProgressBar"
import { Typography, Grid, Button, Paper } from "@material-ui/core"

export default ({ users, todos }) => {
  return (
    <Paper variant="outlined" style={{ minWidth: "320px" }}>
      <Grid
        container
        justify="space-around"
        alignItems="flex-end"
        //  TODO => il faudra refactor le calcul des données pour les charts
      >
        <Grid
          item
          xs={11}
          sm={10}
          md={8}
          lg={6}
          xl={5}
          style={{
            width: "99%",
            minWidth: "300px"
          }}
        >
          <BarChart userList={users.userList} taskList={todos.todoList} />
        </Grid>

        <Grid
          item
          xs={6}
          sm={5}
          md={4}
          lg={2}
          xl={2}
          style={{
            minWidth: "250px",
            textAlign: "center",
            padding: "3em"
          }}
        >
          <ProgressBar taskList={todos.todoList} />
          <Typography variant="caption" display="block">
            Pourcentage de tâches terminées
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}
