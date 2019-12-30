import React, { useState } from 'react'
import useTodo from './useTodo'


export default (name) => {
  const fakeTodos =
    [{ text: 'Apprendre GraphQL', completed: false },
    { text: '學會中文', completed: false },
    { text: 'Apprendre à utiliser les custom hooks', completed: true }
    ]

  const [user, setuser] = useState(name)

  const { todos, addTodo, deleteTodo, toggleTodoCompletion } = useTodo(fakeTodos)


  return {
    user,
    todos

  }
}