import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import '../../assets/css/Layout.css'
import animation from '../../assets/helpers/animation'
import { AppBar, Toolbar, Typography, Paper, Button } from "@material-ui/core";
import {
  NavLink, Link
} from 'react-router-dom'

import GitHubIcon from '@material-ui/icons/GitHub';


const Layout = (props) => {

  useEffect(() => {
    setTimeout(animation, 100)
  }, [])

  // Pour afficher les élements du menu  sur le canvas, j'ai du les mettre en "position: absolute" 
  // Pour centrer j'ai du remplacer la flexbox originale par du ciblage direct via layout.css
  // Todo: Intégrer le layout et les inline stylings en JSS 

  return (
    <Paper
      elevation={0}
      style={{ padding: '0 0 35px 0', margin: '0 0 0 0', backgroundColor: "#fafafa" }} >

      <AppBar position="static" style={{ padding: 0, margin: 0 }} >
        <Toolbar id="large-header" className='bg' style={{ padding: 0, margin: 0 }} >

          <div className="elt a">
            <Typography noWrap color="inherit">Démo Front: APP Gestion de personnel  {' '}
            </Typography>
          </div>

          <div className="elt b" >
            <Paper style={{ display: "flex" }}>
              <Button noWrap component={NavLink} exact to="/" activeClassName="chosen" > Home </Button>
              <Button noWrap component={NavLink} to="/adminview" activeClassName="chosen"> Adminview </Button>
              <Button noWrap component={NavLink} to="/users" activeClassName="chosen"> Userview </Button>
              <Button noWrap component={NavLink} to="/log" activeClassName="chosen"> log </Button>
            </ Paper>
          </div>

          <div className="elt c">
            <Button target="_blank" href='https://github.com/bahuet/todo-app' color="inherit" variant="outlined" startIcon={<GitHubIcon />}>
              Code source
          </Button>
          </div>

          <canvas id="animation-canvas"></canvas>

        </Toolbar>
      </AppBar>

      {props.children}
    </Paper >
  )
}
export default Layout;
