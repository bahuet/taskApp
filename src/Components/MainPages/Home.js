import React from 'react'

import { Typography, Paper, Grid, List, ListItem, ListItemText } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '75%',
    textAlign: 'left',
    margin: '20px auto',
    padding: '20px',
  },
})

export default () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>

      <Grid container >
        <Grid item >
          <Typography variant="h5" gutterBottom>
            React app: Gestion de personnel.
          </Typography>

          <Typography variant="h6" >Quoi:</Typography>
          <Typography variant="body1" gutterBottom>
            Ceci est mon premier project, il s'agit d'une application de gestion de personnel<br />
            C'est une application React + Material UI avec peu de dependencies (react router, recharts),
             encore au stade de proof of concept et en cours de développement (Commencée en Janvier 2020)
              Seul le front-end est disponible pour l'instant
          </Typography>

          <Typography variant="h6" >Pourquoi:</Typography>
          <Typography variant="body1" gutterBottom>
            - S'entrainer à utiliser le React moderne (composants fonctionnels et custom hooks, pas de Redux pour l'instant)<br />
            - Commencer à créer un e-portfolio de projets en ligne.
          </Typography>

          <Typography variant="h6" >Comment utiliser:</Typography>
          <Typography variant="body1" gutterBottom>
            L'administrateur a accès à tous les utilisateurs et leurs tâches.<br />
            Les utilisateurs peuvent accéder à leur page personnelle et la liste de leur tâches assignées sera affichée.<br />
            <br />
            L'administrateur peut:<br />
            - Créer, modifier, supprimer des comptes utilisateurs <br />
            - Leur assigner des tâches, les transférer, les supprimer, les marquer "Urgentes"<br />
            <br />
            L'utilisateur peut:<br />
            - Marquer une tâche comme étant terminée (background green)<br />
            - Marquer une tâche comme étant en cours (bord bleu)
            (styling temporaire, wip)<br />
            <br />
            La page "Log" affiche la liste de toutes les actions
  </Typography>

          <Typography variant="h6" >Plus d'info</Typography>
          <Typography variant="body1" gutterBottom>
            Tous les formulaires sont controllés, toutes les actions changent directement le react state
            et donc mettent à jour les données pour toutes les pages.
  </Typography>

          <Typography variant="h6" >Progression prévue:</Typography>

          <List >
            <ListItem><ListItemText primary="0 - Finaliser le responsive, le styling, nettoyer le code" /></ListItem>
            <ListItem><ListItemText primary="1 - Ecrire les tests front" /></ListItem>
            <ListItem><ListItemText primary="2 - Construire le back en TDD avec avec Node et MongoDB" /></ListItem>
            <ListItem><ListItemText primary="3 - E2E tests avec Cypress" /></ListItem>

          </List>

        </Grid>
      </Grid>
    </Paper>
  )
}