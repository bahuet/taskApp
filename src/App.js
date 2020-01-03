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
import { Typography, Button } from "@material-ui/core"
import useLog from './useHooks/useLog'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import useTodos from './useHooks/useTodos'

const App = () => {

  // generate initial values for demo purposes
  const initialUserNames = ['Eloi', 'Kuo Hsing-chun', 'George Foreman', 'Dmitri Mendeleev', 'Rim Jong Sim', 'Shi Zhiyong', 'Lu Xiaojun', 'Dmitri Klokov', 'Redon Manushi']
  let initialTasks = ['Relancer le fournisseur pour savoir les dates de livraison', 'Régler la facture du fournisseur', 'Refaire du café', "Traduire la notice d'utilisation en anglais"]
  for (let i = 0; i < 30; i++) { initialTasks.push(`Tâche numéro: ${i} (générée automatiquement pour la démo)`) }

  initialTasks = initialTasks.map((x, j) => {
    //Une tâche ne peut pas être completed sans être focused, on le prend en compte pour la génération des valeurs initiales
    const fixedRandomValue = Math.floor(Math.random() * 3)
    return (
      {
        id: j,
        user: initialUserNames[Math.floor(Math.random() * initialUserNames.length)],
        text: x,
        completed: fixedRandomValue ? false : (Math.floor(Math.random() * 2) ? false : true),
        urgent: Math.floor(Math.random() * 3) ? false : true,
        focus: fixedRandomValue ? false : true
      })
  }
  )


  const log = useLog()
  const todos = useTodos(log, initialTasks)
  const users = useUsers(log, todos, initialUserNames)

  //notification hook
  const [status, setStatusBase] = useState('')
  const setStatus = msg => setStatusBase({ msg, date: new Date() });


  const padding = { padding: 5 }

  return (
    <div className="App">
      <Layout>

        <Router>
          <div>
            <Typography color="inherit">
              <Button component={Link} to="/"> Home </Button>
              <Button component={Link} to="/adminview"> Adminview </Button>
              <Button component={Link} to="/users"> Userview </Button>
              <Button component={Link} to="/log"> log </Button>


            </Typography >
            <Route exact path="/" render={() => <Home />} />
            <Route path="/adminview" render={() => <AdminView users={users} todos={todos} setStatus={setStatus} />} />
            <Route path="/log" render={() => <LogList logList={log.logList} />} />
            <Route exact path="/users" render={() => <UserList users={users} />} />
            <Route path="/users/:name" render={({ match }) =>
              <UserView
                user={users.userList.find(u => u === match.params.name)}
                userTodos={todos.todoList.filter(td => td.user === match.params.name)}
                actions={todos.userActions} setStatus={setStatus} />} />

          </div>
        </Router>

      </Layout>
      {status ? <Notification key={status.date} status={status.msg} /> : null}
    </div >

  )
}

export default App