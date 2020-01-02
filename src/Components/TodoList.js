import React from 'react'
import TodoListItem from './ToDoListItem'
import { Grid, List } from '@material-ui/core'

const TodoList = ({ userTodos, actions, mode }) => {
  return (
    <div className='todos-list'>
      <Grid
        spacing={2}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <List>
          {userTodos
            //.sort((a, b) => a.completed === b.completed ? 0 : a.completed ? 1 : -1)
            .map((todo, index) => <TodoListItem
              todo={todo} actions={actions} mode={mode}
              key={todo.text + index} />)}
        </List>
      </Grid>
    </div>
  )
}


export default TodoList