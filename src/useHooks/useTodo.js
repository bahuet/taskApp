import { useState } from 'react'

export default () => {
  const [todos, setTodos] = useState([])
  return {
    todos,
    addTodo: text => {
      const newTodos = [{ text: text, completed: false }, ...todos]
      setTodos(newTodos)
    },
    deleteTodo: index => {
      const newTodos = todos.filter((x, i) => index !== i)
      setTodos(newTodos)
    },
    toggleTodoCompletion: index => {
      const newTodos = todos.map((x, i) => i === index ? { ...x, completed: !x.completed } : x)
      setTodos(newTodos)
    }
  }


}