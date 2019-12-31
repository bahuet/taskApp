import React from 'react'
import List from '@material-ui/core/List';
import TodoListItem from './ToDoListItem'
import { Grid } from '@material-ui/core'

const TodoList = ({ user, mode }) => {
  console.log(`todoList props: user: ${JSON.stringify(user)}, mode:${mode}`)
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
          {user.todos
            //.sort((a, b) => a.completed === b.completed ? 0 : a.completed ? 1 : -1)
            .map((todo, index) => <TodoListItem
              todo={todo} mode={mode}
              deleteTodo={() => user.deleteTodo(index)}
              setUrgent={() => user.setUrgent(index)}
              setNotUrgent={() => user.setNotUrgent(index)}
              setFocused={() => user.setFocused(index)}
              setNotFocused={() => user.setNotFocused(index)}
              setCompleted={() => user.setCompleted(index)}
              setNotCompleted={() => user.setNotCompleted(index)}
              undoUserActions={() => user.undoUserActions(index)}
              key={todo.text + index} />)}
        </List>
      </Grid>
    </div>
  )
}


export default TodoList