import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

export default ({ taskList }) => {
  const [total, completed] = taskList.reduce(
    (acc, task) => {
      return [acc[0] + 1, task.completed ? acc[1] + 1 : acc[1]]
    },
    [0, 0]
  )

  const percentage = Math.floor((completed / total) * 100)

  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
        // Colors
        pathColor: `rgba(130, 202, 150, ${percentage / 100 + 10})`,
        textColor: "#82ca9d",
        trailColor: "#d6d6d6",
        backgroundColor: "#3e98c7"
      })}
    />
  )
}
