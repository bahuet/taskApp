import React, { useState } from 'react'
import useTodo from './useTodo'


export default (name) => {


  const [username, setUsername] = useState(name)

  const { todos, addTodo, deleteTodo, toggleTodoCompletion, toggleTodoUrgency, toggleTodoFocus, undoUserActions } = useTodo()


  return {
    username,
    todos, addTodo, deleteTodo, toggleTodoCompletion, toggleTodoUrgency, toggleTodoFocus, undoUserActions

  }
}