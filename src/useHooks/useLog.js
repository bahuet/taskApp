import { useState } from 'react'

export default () => {
  const [logList, setLogList] = useState([])

  return {
    logList,
    addToLog: (user, action, taskId = '', taskText = '', ) => {
      const newLog = {
        timestamp: Date.now(),
        user, action, taskId, taskText
      }
      setLogList([...logList, newLog])
    }
  }

}