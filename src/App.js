import React from 'react';
import useUser from './useHooks/useUser'
import './App.css';
import Layout from './Components/Layout'
import TodoForm from './Components/TodoForm'
import UserList from './Components/UserList'
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import AdminView from './Components/AdminView';

const App = () => {




  const fakeUsers = [useUser('Arthur'), useUser('Antoine')]



  const padding = { padding: 5 }

  return (
    <div className="App">
      <Layout>

        <Router>
          <div>
            <div>
              <Link style={padding} to="/">home</Link>
              <Link style={padding} to="/adminview">Adminview</Link>
              <Link style={padding} to="/users">Userview</Link>
            </div>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/adminview" render={() => <AdminView users={fakeUsers} />} />
            <Route exact path="/users" render={() => <UserList users={fakeUsers} />} />
          </div>
        </Router>

      </Layout>
    </div >

  )
}

export default App