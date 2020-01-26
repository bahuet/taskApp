import React, { useState } from "react"
import Confetti from "react-confetti"
import { Typography, Grid, Fade } from "@material-ui/core"

import { CheckCircle } from "@material-ui/icons"

export default ({ userTodos }) => {
  const [confettis, setConfettis] = useState(0)
  const launchConfettis = () => {
    if (!confettis) {
      console.log(`confettis set and timeout started`)
      setTimeout(() => {
        console.log(`timeout`)
        setConfettis(2)
      }, 8000)
      setConfettis(1)
    }
  }

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
    launchConfettis()
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
        </Grid>
      </Grid>
    )
  } else {
    const left = total - completed
    output = (
      <Typography variant="h6" color="primary" gutterBottom>
        Plus que {left} tâche{left === 1 ? "" : "s"} restante
        {left === 1 ? "" : "s"}!
      </Typography>
    )
  }

  return (
    <div style={{ textAlign: "center" }}>
      {output}
      <Fade in={confettis === 1} timeout={1000}>
        <Confetti />
      </Fade>
    </div>
  )
}
