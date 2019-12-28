import { useState } from 'react'

export default () => {
  const [input, setInput] = useState('')
  return {
    input,
    onChange: e => { setInput(e.target.value) },
    clearInput: () => setInput('')
  }

}