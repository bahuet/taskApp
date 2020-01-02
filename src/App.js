import React, { useState, useEffect } from 'react';
import useUsers from './useHooks/useUsers'
import './App.css';
import Layout from './Components/Layout'
import UserList from './Components/UserList'
import Home from './Components/Home'
import UserView from './Components/UserView'
import AdminView from './Components/AdminView'
import Notification from './Components/Notification'

import LogList from './Components/LogList'
import { Typography } from "@material-ui/core"
import useLog from './useHooks/useLog'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import useTodos from './useHooks/useTodos'

const App = () => {
  const log = useLog()
  const todos = useTodos(log)
  const users = useUsers(log, todos)
  //notification hook
  const [status, setStatusBase] = useState('')
  const setStatus = msg => setStatusBase({ msg, date: new Date() });

  //init state for demo purposes
  useEffect(() => {
    users.addUser('jon')
    todos.adminActions.addTodo('jon', 'do the dishes')
  }, [])


  const padding = { padding: 5 }

  return (
    <div className="App">
      <Layout>

        <Router>
          <div>
            <Typography color="inherit">

              <Link style={padding} to="/">Home</Link>
              <Link style={padding} to="/adminview">Adminview</Link>
              <Link style={padding} to="/users">Userview</Link>
              <Link style={padding} to="/log">log</Link>

            </Typography >
            <Route exact path="/" render={() => <Home />} />
            <Route path="/adminview" render={() => <AdminView users={users} todos={todos} setStatus={setStatus} />} />
            <Route path="/log" render={() => <LogList logList={log.logList} />} />
            <Route exact path="/users" render={() => <UserList users={users} />} />
            <Route path="/users/:name" render={({ match }) =>
              <UserView
                user={users.userList.find(u => u === match.params.name)}
                userTodos={todos.todoList.filter(td => td.user === match.params.name)}
                actions={todos.userActions} setStatus={setStatus}/>} />

          </div>
        </Router>

      </Layout>
      {status ? <Notification key={status.date} status={status.msg} /> : null}
    </div >

  )
}

export default App