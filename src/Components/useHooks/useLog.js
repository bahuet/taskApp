import { useState } from 'react'

export default (initialLogs = []) => {

  const [logList, setLogList] = useState(initialLogs)

  return {
    logList,
    addToLog: (user, action, taskId = '', taskText = '') => {
      const newLog = {
        timestamp: Date.now(),
        user, action, taskId, taskText
      }
      setLogList([...logList, newLog])
    }
  }

}