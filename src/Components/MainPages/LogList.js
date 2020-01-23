import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const LogList = ({ logList }) => {

  return (
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
}

export default LogList