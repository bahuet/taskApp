import React from "react";
import { AppBar, Toolbar, Typography, Paper, Button } from "@material-ui/core";
import {
  NavLink, Link
} from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub';


const Layout = (props) => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: "#fafafa" }}
  >
    <AppBar color="primary" position="static" style={{ height: 64 }}>
      <Toolbar style={{ height: 64, justifyContent: "space-between" }} >
        <Typography color="inherit">Démo Front: APP Gestion de personnel  {' '}
        

        </Typography>
        <Paper >
          <Button component={NavLink} exact to="/" activeClassName="chosen" > Home </Button>
          <Button component={NavLink} to="/adminview" activeClassName="chosen"> Adminview </Button>
          <Button component={NavLink} to="/users" activeClassName="chosen"> Userview </Button>
          <Button component={NavLink} to="/log" activeClassName="chosen"> log </Button>
        </ Paper>

        <Button target="_blank" href='https://github.com/bahuet/todo-app' color="inherit" variant="outlined" >
            <GitHubIcon />  Code source
          </Button>
      </Toolbar>

    </AppBar>
    {props.children}

  </Paper>
)

export default Layout;
