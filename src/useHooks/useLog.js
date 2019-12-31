import { useState } from 'react'

export default () => {
  const [logList, setLogList] = useState([])

  return {
    logList,
    addToLog: (user, action, task) => {
      const newLog = {
        timestamp: Date.now(),
        user, action, task
      }
      setLogList([...logList, newLog])
    }
  }

}