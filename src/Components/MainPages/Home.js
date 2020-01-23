import React from 'react'
import { Typography, Paper, Grid, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TodosCard from '../Card/TodosCard'
const useStyles = makeStyles({
  root: {
    width: '75%',
    textAlign: 'left',
    margin: '20px auto',
    padding: '20px',
  },
});
const Home = () => {
  const classes = useStyles();

  return (

    <Paper className={classes.root}>

      <Grid container >
        <Grid item >
          <Typography variant="h5" gutterBottom>
            Front démo: Gestion de personnel. (En cours de développement)

    </Typography>

          <Typography variant="body1" gutterBottom>
            Tout a été fait depuis zéro, excepté animation.js
          </Typography>


          <Typography variant="body1" gutterBottom>
            L'administrateur crée des utilisateurs, et leur attribue des tâches.
            Les utilisateurs peuvent accéder à leur page personnelle et la liste de leur tâches assignées sera affichée.
            Toute action entraine un changement de l'état de react
          </Typography>

          <Typography variant="body1" gutterBottom>
            On peut créer des utilisateurs depuis la page AdminView, assigner et supprimer des tâches aux utilisateurs crées, et les marquer comme urgentes.
        Les utilisateurs peuvent accéder à leurs listes de tâches depuis la page Userview, et peuvent marquer les tâches avec les flag "en cours", "terminé".
        Tous les formulaires sont controllés, toutes les actions changent directement le react state et donc mettent à jour les données pour toutes les pages.
        La page "Log" affiche la liste de toutes les actions
  </Typography>

          <Typography variant="body1" gutterBottom>
            Proof of concept, il n'y a pas de backend ni de styling pour l'instant.
  </Typography>

          <Typography>
            Librairies: React + Material ui
</Typography>

          <Typography variant="body1" gutterBottom>
            Objectif: s'entrainer à gérer le app state management uniquement avec des react hooks (pas de Redux)
  </Typography>

          <Typography variant="body1" gutterBottom>
          </Typography>
          <List >
            <ListItem><ListItemText primary="Progression prévue:" /></ListItem>
            <ListItem><ListItemText primary="0 - Finaliser les fonctionnalités front(transfert de tâches à un autre utilisateur...)" /></ListItem>
            <ListItem><ListItemText primary="1 - Ecrire les tests front" /></ListItem>
            <ListItem><ListItemText primary="2 - Design: refonte avec les styled components à la place de Material" /></ListItem>
            <ListItem><ListItemText primary="3 - Construire le back en test driven dev avec avec Node et MongoDB" /></ListItem>
            <ListItem><ListItemText primary="4 - E2E tests avec Cypress" /></ListItem>
            <ListItem><ListItemText primary="5 - Deploy avec Heroku" /></ListItem>
            <ListItem><ListItemText primary="idées : drag and drop tasks depuis le admin panel (comme sur Jira), " /></ListItem>


          </List>


        </Grid>
      </Grid>
    </Paper>
  )
}


export default Home