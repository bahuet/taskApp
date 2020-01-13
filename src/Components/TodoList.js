import React from 'react'
import TodoListItem from './ToDoListItem'
import { Grid, List, Paper, Typography } from '@material-ui/core'
import CreateTodoFormButton from './AdminComponents/CreateTodoFormButton'

const TodoList = ({ user, userTodos, actions, mode, setNotification, deleteUser }) => (
  <Grid item xs={4} >
    <Paper elevation={3} >
      <Typography variant='h6'>
        Tableau de bord de: {user}&nbsp;&nbsp;&nbsp;
      </Typography>
      {userTodos.length > 0 ?

        <List>
          {userTodos
            //.sort((a, b) => a.completed === b.completed ? 0 : a.completed ? 1 : -1)
            .map((todo, index) => <TodoListItem
              todo={todo} actions={actions} mode={mode} setNotification={setNotification}
              key={todo.text + index} />)}
        </List>
        : <Typography><br />La liste de tâches est vide</Typography>}
    </Paper>
    <CreateTodoFormButton user={user} userTodos={userTodos} actions={actions} setNotification={setNotification} />
  </Grid >



)



export default TodoList