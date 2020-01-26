import React from "react"
import { Route, Switch } from "react-router-dom"

import UserList from "../MainPages/UserList"
import Home from "../MainPages/Home"
import UserView from "../MainPages/UserView"
import AdminView from "../MainPages/AdminView"
import NotFound from "./NotFound"
import LogList from "../MainPages/LogList"

import { Typography } from "@material-ui/core"

export default ({ users, todos, setNotification, log }) => (
  <div>
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route
        path="/adminview"
        render={() => (
          <AdminView
            users={users}
            todos={todos}
            setNotification={setNotification}
          />
        )}
      />
      <Route path="/log" render={() => <LogList logList={log.logList} />} />
      <Route exact path="/users" render={() => <UserList users={users} />} />
      <Route
        path="/users/:name"
        render={({ match }) => {
          const user = users.userList.find(u => u.name === match.params.name)

          return user ? (
            <UserView
              user={user}
              userTodos={todos.todoList.filter(
                td => td.userName === match.params.name
              )}
              actions={todos.userActions}
              setNotification={setNotification}
            />
          ) : (
            <Typography variant="h4" color="secondary">
              User not found
            </Typography>
          )
        }}
      />

      <Route render={() => <NotFound />} />
    </Switch>
  </div>
)
