import React, { useEffect } from "react"
import { NavLink } from "react-router-dom"

import animation from "../../assets/js/helpers/animation.js"
import ToTopButton from "./ToTopButton"

import { AppBar, Toolbar, Typography, Paper, Button } from "@material-ui/core"

import GitHubIcon from "@material-ui/icons/GitHub"

import "../../assets/css/Layout.css"

// const useStyles = makeStyles(theme => ({
//   pageBody: {
//     margin: 0,
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column'
//   }
// }))

const Layout = props => {
  //const classes = useStyles();

  useEffect(() => {
    setTimeout(animation, 100)
  }, [])

  // Pour afficher les élements du menu  sur le canvas, j'ai du les mettre en "position: absolute"
  // Pour centrer j'ai du remplacer la flexbox originale par du ciblage direct via layout.css
  // Todo: Intégrer le layout et les inline stylings en JSS
  return (
    <div>
      <Paper
        className="pageBody"
        elevation={0}
        style={{
          backgroundColor: "#fafafa"
        }}
      >
        <div className="header">
          <AppBar position="static">
            <Toolbar id="large-header" className="bg" style={{ padding: 0, margin: 0 }}>
              <div className="elt a">
                <Typography noWrap color="inherit">
                  {" "}
                  Démo Front: APP Gestion de personnel{" "}
                </Typography>
              </div>

              <div className="elt b">
                <Paper style={{ display: "flex" }}>
                  <Button nowrap="true" component={NavLink} exact to="/" activeClassName="chosen">
                    {" "}
                    Home{" "}
                  </Button>
                  <Button
                    nowrap="true"
                    component={NavLink}
                    to="/adminview"
                    activeClassName="chosen"
                  >
                    {" "}
                    Adminview{" "}
                  </Button>
                  <Button nowrap="true" component={NavLink} to="/users" activeClassName="chosen">
                    {" "}
                    Userview{" "}
                  </Button>
                  <Button nowrap="true" component={NavLink} to="/log" activeClassName="chosen">
                    {" "}
                    log{" "}
                  </Button>
                </Paper>
              </div>

              <div className="elt c">
                <Button
                  target="_blank"
                  href="https://github.com/bahuet/todo-app"
                  color="inherit"
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                >
                  Code source
                </Button>
              </div>

              <canvas id="animation-canvas"></canvas>
            </Toolbar>
          </AppBar>
        </div>

        <div className="content">{props.children}</div>
      </Paper>
      <ToTopButton />
    </div>
  )
}
export default Layout
