import { useState } from 'react'

export default initialValue => {
  const [todos, setTodos] = useState(initialValue)
  const updateLocalStorage = updatedTodos => localStorage.setItem('savedTodos', JSON.stringify(updatedTodos))
  return {
    todos,
    addTodo: text => {
      const newTodos = [{ text: text, completed: false }, ...todos]
      setTodos(newTodos)
      updateLocalStorage(newTodos)
    },
    deleteTodo: index => {
      const newTodos = todos.filter((x, i) => index !== i)
      setTodos(newTodos)
      updateLocalStorage(newTodos)
    },
    toggleTodoCompletion: index => {
      const newTodos = todos.map((x, i) => i === index ? { ...x, completed: !x.completed } : x)
      setTodos(newTodos)
      updateLocalStorage(newTodos)
    }
  }


}