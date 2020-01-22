import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Fab, Fade } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
const useStyles = makeStyles(theme => ({

  absolute: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));
export default () => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false)

  const checkScroll = () => {
    if (window.scrollY > 200) {
      setVisible(true)
    } else {
      setVisible(false)

    }
  }

  const scrollUp = () => {
    window.scroll(0, 0)
    setVisible(false)
  }

  //je peux faire avec react?
  window.addEventListener('scroll', checkScroll)

  return (
    <Fade in={visible}>
      < Tooltip placement="top-start" title="Remonter en haut de la page">
        <Fab onClick={scrollUp} color="primary" className={classes.absolute}>
          <UpIcon />
        </Fab>
      </Tooltip>

    </Fade>
  )
}

