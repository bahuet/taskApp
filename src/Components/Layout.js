import React from "react";
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";

const Layout = (props) => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: "#fafafa" }}
  >
    <AppBar color="primary" position="static" style={{ height: 64 }}>
      <Toolbar style={{ height: 64 }}>
        <Typography color="inherit">Démo Front: APP Gestion de personnel</Typography>
      </Toolbar>
    </AppBar>
    {props.children}
  </Paper>
)

export default Layout;
