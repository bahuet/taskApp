import React, { useState, useEffect } from 'react';
import useUsers from './useHooks/useUsers'
import Layout from './Components/Layout'
import Notification from './Components/Notification'
import MainRoutes from './Components/MainRoutes'
import useLog from './useHooks/useLog'
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom'
import init from './assets/helpers/init'

import useTodos from './useHooks/useTodos'

const App = () => {

  const log = useLog()
  const todos = useTodos(log)
  const users = useUsers(log, todos)
  const [notif, setNotifBase] = useState('')
  const setNotification = msg => setNotifBase({ msg, date: new Date() });

  useEffect(() => {
    const INIT_USERS_QUANTITY = 10
    const INIT_TASKS_QUANTITY = 30
    const [fakeNamesArray, fakeTasksArray] = init(INIT_USERS_QUANTITY, INIT_TASKS_QUANTITY)
    todos.setTodoList(fakeTasksArray)
    users.setUsersList(fakeNamesArray)
    log.addToLog(`SYSTEM`, `INIT`, 0, `initiated state with the hardcoded arrays and generated an additional ${INIT_USERS_QUANTITY} users and ${INIT_TASKS_QUANTITY} tasks`)
  }, [])

  return (
    <div className="App">
      <Router>
        <Layout>
          <MainRoutes users={users} todos={todos} setNotification={setNotification} log={log} />
        </Layout>
      </Router>
      {notif ? <Notification key={notif.date} notif={notif.msg} /> : null}
    </div >

  )
}

export default App