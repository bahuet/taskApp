import React from 'react'
import List from '@material-ui/core/List';
import TodoListItem from './ToDoListItem'
import { Grid } from '@material-ui/core'

const TodoList = ({ todos, deleteTodo, toggleTodoCompletion }) => (
  <div className='todos-list'>
    <Grid
      spacing={2}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <List>
        {todos
          //.sort((a, b) => a.completed === b.completed ? 0 : a.completed ? 1 : -1)
          .map((x, index) => <TodoListItem
            deleteTodo={deleteTodo} toggleTodoCompletion={toggleTodoCompletion} x={x} index={index}
            key={x.text + index} />)}

      </List>
    </Grid>
  </div>
)


export default TodoList