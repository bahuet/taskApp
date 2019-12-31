import React from 'react';
import useUser from './useHooks/useUser'
import './App.css';
import Layout from './Components/Layout'
import TodoForm from './Components/TodoForm'
import UserList from './Components/UserList'
import Home from './Components/Home'
import UserView from './Components/UserView'
import AdminView from './Components/AdminView';
import LogList from './Components/LogList'
import { Typography } from "@material-ui/core";
import useLog from './useHooks/useLog'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const App = () => {
  const log = useLog()
  const fakeUsers = [useUser('Arthur', log), useUser('Antoine', log)]


  const users = fakeUsers
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
            <Route path="/adminview" render={() => <AdminView users={users} />} />
            <Route path="/log" render={() => <LogList logList={log.logList} />} />
            <Route exact path="/users" render={() => <UserList users={users} />} />
            <Route path="/users/:name" render={({ match }) =>
              <UserView user={users.find(u => u.username === match.params.name)} />} />

          </div>
        </Router>

      </Layout>
    </div >

  )
}

export default App