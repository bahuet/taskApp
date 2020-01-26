import { useState } from "react"

export default (defaultValue = "") => {
  const [input, setInput] = useState(defaultValue)

  return {
    input,
    onChange: e => {
      setInput(e.target.value)
    },
    clear: () => {
      setInput("")
    },
    set: (val = "") => {
      setInput(val)
    }
  }
}
