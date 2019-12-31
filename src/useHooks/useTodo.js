import { useState } from 'react'

export default () => {
  const [todos, setTodos] = useState([])
  return {
    todos,
    addTodo: text => {
      const newTodos = [{ text: text, completed: false, urgent: false, focus: false }, ...todos]
      setTodos(newTodos)
    },
    deleteTodo: index => {
      const newTodos = todos.filter((x, i) => index !== i)
      setTodos(newTodos)
    },
    toggleTodoCompletion: index => {
      const newTodos = todos.map((x, i) => i === index ? { ...x, completed: !x.completed } : x)
      setTodos(newTodos)
    },
    toggleTodoUrgency: index => {
      const newTodos = todos.map((x, i) => i === index ? { ...x, urgent: !x.urgent } : x)
      setTodos(newTodos)
    },
    toggleTodoFocus: index => {
      const newTodos = todos.map((x, i) => i === index ? { ...x, focus: !x.focus } : { ...x, focus: false })
      setTodos(newTodos)
    },
    undoUserActions: index => {
      const newTodos = todos.map((x, i) => i === index ? { ...x, completed: false, focus: false } : x)
      setTodos(newTodos)
    }
  }


}