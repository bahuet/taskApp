import React from 'react'
import TodoList from './TodoList'
import CreateTodoForm from './CreateTodoForm'
import CreateUserButton from './CreateUserButton'
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import { Typography, Paper, IconButton } from "@material-ui/core";

const AdminView = ({ users, todos }) => {
  return (
    <div>
      <Typography variant='h4'> Administration panel</Typography>
      <CreateTodoForm actions={todos.adminActions} users={users} />
      <CreateUserButton users={users} />
      {users.userList.map((user, i) => (
        <div key={user + i}>
          <Paper variant="outlined">
            <Typography variant='subtitle2'>
              Tableau de bord de: {user}
              <IconButton onClick={() => users.deleteUser(user)}> <DeleteOutlined />   </IconButton>
            </Typography>
            <TodoList userTodos={todos.todoList.filter(td => td.user === user)} actions={todos.adminActions} mode="admin" />
          </Paper>
        </div>
      ))}
    </div>
  )
}

export default AdminView