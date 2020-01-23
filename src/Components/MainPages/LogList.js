import React from 'react'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";

export default ({ logList }) => (
  <TableContainer component={Paper}  >
    <Table size="small" >
      <TableHead>
        <TableRow style={{ background: 'lightgrey' }}>
          <TableCell align="right">Timestamp</TableCell>
          <TableCell align="right">User</TableCell>
          <TableCell align="right">Action</TableCell>
          <TableCell align="right">Task ID</TableCell>
          <TableCell align="right">Task</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {logList.map(row => {
          const date = new Date(row.timestamp)
          return (
            <TableRow key={row.timestamp + row.user}>
              <TableCell align="right"> {date.toLocaleDateString()}{' '}{date.toLocaleTimeString()}</TableCell>
              <TableCell align="right">{row.user}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
              <TableCell align="right">{row.taskId}</TableCell>
              <TableCell align="right">{row.taskText}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </TableContainer >

)

