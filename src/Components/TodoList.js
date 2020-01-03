import React from 'react'
import TodoListItem from './ToDoListItem'
import { Grid, List, Paper, Typography } from '@material-ui/core'

const TodoList = ({ userTodos, actions, mode, setStatus }) => {
  return (
    <Paper className='todos-list'>
      <Grid
        spacing={2}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >

        {userTodos.length > 0 ? <List>
          {userTodos
            //.sort((a, b) => a.completed === b.completed ? 0 : a.completed ? 1 : -1)
            .map((todo, index) => <TodoListItem
              todo={todo} actions={actions} mode={mode} setStatus={setStatus}
              key={todo.text + index} />)}
        </List> : <Typography><br/>La liste de tâches est vide</Typography>}
      </Grid>
    </Paper >
  )
}


export default TodoList