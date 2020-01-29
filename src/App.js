import React, { useState, useEffect } from "react"

import { BrowserRouter as Router } from "react-router-dom"

import init from "./assets/js/demoHelpers/init"
import Layout from "./Components/Secondary/Layout"
import Notification from "./Components/Secondary/Notification"
import MainRoutes from "./Components/Secondary/MainRoutes"

import useUsers from "./Components/useHooks/useUsers"
import useTodos from "./Components/useHooks/useTodos"
import useLog from "./Components/useHooks/useLog"

const App = () => {
  useEffect(() => {
    document.title = "Application Todo"
  }, [])
  
  const log = useLog()
  const todos = useTodos(log)
  const users = useUsers(log, todos)
  const [notif, setNotifBase] = useState("")
  const setNotification = msg => setNotifBase({ msg, date: new Date() })

  useEffect(() => {
    const INIT_USERS_QUANTITY = 10
    const INIT_TASKS_QUANTITY = 50
    const [fakeNamesArray, fakeTasksArray] = init(INIT_USERS_QUANTITY, INIT_TASKS_QUANTITY)
    todos.setTodoList(fakeTasksArray)
    users.setUsersList(fakeNamesArray)
    log.addToLog(
      `SYSTEM`,
      `INIT`,
      0,
      `initiated state with the hardcoded arrays and generated an additional ${INIT_USERS_QUANTITY} users and ${INIT_TASKS_QUANTITY} tasks`
    )
  }, [])

  return (
    <div className="App">
      <Router>
        <Layout>
          <MainRoutes users={users} todos={todos} setNotification={setNotification} log={log} />
        </Layout>
      </Router>
      {notif ? <Notification key={notif.date} notif={notif.msg} /> : null}
    </div>
  )
}

export default App
