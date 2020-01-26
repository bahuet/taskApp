import React from "react"
import Confetti from "react-confetti"
import { Typography, Grid } from "@material-ui/core"

import { CheckCircle } from "@material-ui/icons"

export default ({ userTodos }) => {
  const total = userTodos.reduce((a, c) => a + 1, 0)
  const completed = userTodos.reduce((a, c) => (c.completed ? a + 1 : a), 0)
  let output

  if (total === 0) {
    output = (
      <Typography variant="h6" color="secondary" gutterBottom>
        La liste est vide
      </Typography>
    )
  } else if (total === completed) {
    output = (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ backgroundColor: "green", color: "white" }}
      >
        <Grid item>
          <CheckCircle fontSize="large" />
        </Grid>

        <Grid item>
          <Typography variant="h6">
            Toutes les tâches sont terminées!
          </Typography>
          <Confetti />
        </Grid>
      </Grid>
    )
  } else {
    output = (
      <Typography variant="h6" color="primary" gutterBottom>
        Plus que {total - completed} tâches restantes!
      </Typography>
    )
  }

  return <div style={{ textAlign: "center" }}>{output}</div>
}
