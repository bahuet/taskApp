import { useState } from 'react'

export default (name, log) => {
  const [todos, setTodos] = useState([])
  const getTaskText = (index) => todos.find((x, i) => index === i).text


  return {
    todos,
    addTodo: text => {
      const newTodos = [{ text: text, completed: false, urgent: false, focus: false }, ...todos]
      setTodos(newTodos)
      log.addToLog('Admin', 'Task creation', text)
    },
    deleteTodo: index => {
      const newTodos = todos.filter((x, i) => index !== i)
      setTodos(newTodos)
      log.addToLog('Admin', 'Task deletion', getTaskText(index))
    },
    setUrgent: index => {
      const newTodos = todos.map((x, i) => i === index ? { ...x, urgent: true } : x)
      setTodos(newTodos)
      log.addToLog('Admin', 'Urgent set to true', getTaskText(index))

    },
    setNotUrgent: index => {
      const newTodos = todos.map((x, i) => i === index ? { ...x, urgent: false } : x)
      setTodos(newTodos)
      log.addToLog('Admin', 'Urgent set to false', getTaskText(index))

    },
    setCompleted: index => {
      const newTodos = todos.map((x, i) => i === index ? { ...x, completed: true } : x)
      setTodos(newTodos)
      log.addToLog(name, 'Completed set to true', getTaskText(index))

    },
    setNotCompleted: index => {
      const newTodos = todos.map((x, i) => i === index ? { ...x, completed: false } : x)
      setTodos(newTodos)
      log.addToLog(name, 'Completed set to false', getTaskText(index))

    },

    setFocused: index => {
      const newTodos = todos.map((x, i) => i === index ? { ...x, focus: true } : { ...x, focus: false })
      setTodos(newTodos)
      log.addToLog(name, 'Focus set to true', getTaskText(index))

    },
    setNotFocused: index => {
      const newTodos = todos.map((x, i) => i === index ? { ...x, focus: false } : x)
      setTodos(newTodos)
      log.addToLog(name, 'Focus set to false', getTaskText(index))

    },
    undoUserActions: index => {
      const newTodos = todos.map((x, i) => i === index ? { ...x, completed: false, focus: false } : x)
      setTodos(newTodos)
      log.addToLog(name, 'User actions reset to default', getTaskText(index))

    }
  }


}