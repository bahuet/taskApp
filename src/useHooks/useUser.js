import React, { useState } from 'react'
import useTodo from './useTodo'


export default (name, log) => {


  const [username, setUsername] = useState(name)

  const { todos, addTodo, deleteTodo,
    setCompleted, setNotCompleted,
    setUrgent, setNotUrgent, setFocused,
    setNotFocused, undoUserActions
  } = useTodo(name, log)


  return {
    username, todos, addTodo, deleteTodo, setCompleted, setNotCompleted, setUrgent, setNotUrgent, setFocused, setNotFocused, undoUserActions

  }
}