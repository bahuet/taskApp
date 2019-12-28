import React from 'react';
import useTodo from './useTodo'
import './App.css';
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";

import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoStatus from './TodoStatus'

const App = () => {

  const savedTodosRaw = localStorage.getItem('savedTodos')
  const savedTodos = savedTodosRaw ? JSON.parse(savedTodosRaw) : null

  const defaultValues = savedTodos ? savedTodos :
    [{ text: 'Apprendre GraphQL', completed: false },
    { text: '學會中文', completed: false },
    { text: 'Apprendre à utiliser les custom hooks', completed: true }
    ]

  const { todos, addTodo, deleteTodo, toggleTodoCompletion } = useTodo(defaultValues)
  return (
    <div className="App">
      <Paper
        elevation={0}
        style={{ padding: 0, margin: 0, backgroundColor: "#fafafa" }}
      >
        <AppBar color="primary" position="static" style={{ height: 64 }}>
          <Toolbar style={{ height: 64 }}>
            <Typography color="inherit">TODO APP</Typography>
          </Toolbar>
        </AppBar>
        <TodoForm addTodo={addTodo} />
        <br />
        <TodoStatus todos={todos} />
        <br />
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodoCompletion={toggleTodoCompletion} />
      </Paper>

    </div >

  )
}

export default App