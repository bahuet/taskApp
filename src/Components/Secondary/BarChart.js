import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts"

export default ({ userList, taskList }) => {
  const unorderedData = {}
  taskList.forEach(task => {
    if (!(task.userId in unorderedData)) {
      unorderedData[task.userId] = {
        name: task.userName,
        pending: 0,
        urgent: 0,
        completed: 0
      }
    }
    if (task.completed) {
      unorderedData[task.userId].completed++
    } else if (task.urgent) {
      unorderedData[task.userId].urgent++
    } else {
      unorderedData[task.userId].pending++
    }
  })

  const orderedData = userList.map(user =>
    unorderedData[user.id]
      ? unorderedData[user.id]
      : { name: user.name, pending: 0, urgent: 0, completed: 0 }
  )

  return (
    <ResponsiveContainer aspect={1.6}>
      <BarChart
        data={orderedData}
        margin={{ top: 30, right: 10, left: 10, bottom: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick="" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pending" stackId="a" fill="#8884d8" name="En attente" />
        <Bar dataKey="completed" stackId="a" fill="#82ca9d" name="Terminé" />
        <Bar dataKey="urgent" stackId="a" fill="#bc3644" name="Urgent" />
      </BarChart>
    </ResponsiveContainer>
  )
}
