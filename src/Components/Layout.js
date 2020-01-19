import React, { useEffect } from "react";
import animation from '../assets/helpers/animation'
import { AppBar, Toolbar, Typography, Paper, Button } from "@material-ui/core";
import {
  NavLink, Link
} from 'react-router-dom'

import GitHubIcon from '@material-ui/icons/GitHub';


const Layout = (props) => {
  useEffect(() => {
    animation()
  }, [])


  return (
    <Paper
      elevation={0}
      style={{ padding: 0, margin: 0, backgroundColor: "#fafafa" }} >
      <div className='bg'>

        <AppBar position="static" >
          <Toolbar id="large-header" >

            <canvas id="demo-canvas"></canvas>

            <div className="elt a">
              <Typography color="inherit">Démo Front: APP Gestion de personnel  {' '}
              </Typography>
            </div>

            <div className="elt b">
              <Paper >
                <Button component={NavLink} exact to="/" activeClassName="chosen" > Home </Button>
                <Button component={NavLink} to="/adminview" activeClassName="chosen"> Adminview </Button>
                <Button component={NavLink} to="/users" activeClassName="chosen"> Userview </Button>
                <Button component={NavLink} to="/log" activeClassName="chosen"> log </Button>
              </ Paper>
            </div>

            <div className="elt c">
              <Button target="_blank" href='https://github.com/bahuet/todo-app' color="inherit" variant="outlined" >
                <GitHubIcon />  Code source
          </Button>
            </div>

          </Toolbar>
        </AppBar>
      </div>

      {props.children}

    </Paper >
  )
}
export default Layout;
