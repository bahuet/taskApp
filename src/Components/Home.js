import React from 'react'
import { Typography, Paper, Grid, List, ListItem, ListItemText } from "@material-ui/core";


const Home = () => (
  <Paper>
    <Grid >
      <Grid item>
        <Typography variant="h5" gutterBottom>
          Front démo: Gestion de personnel.
    </Typography>

        <Typography variant="body1" gutterBottom>
          L'administrateur crée des utilisateurs, et leur attribue des tâches.
          Les utilisateurs peuvent accéder à leur page personnelle et la liste de leur tâches assignées sera affichée.

          On peut créer des utilisateurs depuis la page AdminView, assigner et supprimer des tâches aux utilisateurs crées, et les marquer comme urgentes
      Les utilisateurs peuvent accéder à leurs listes de tâches depuis la page Userview, et peuvent marquer les tâches avec les flag "en cours", "terminé".
      Tous les formulaires sont controllés, toutes les actions changent directement le react state et donc mettent à jour les données pour toutes les pages.
      La page "Log" affiche la liste de toutes les actions
  </Typography>

        <Typography variant="body1" gutterBottom>
          Il ne s'agit que d'une Proof of concept, il n'y a pas de backend pour l'instant.
          Librairies: React + Material ui 
  </Typography>

        <Typography variant="body1" gutterBottom>
          L'objectif de ce mini-projet est de s'entrainer à gérer le app state management uniquement avec des react hooks, et sans redux.
          Redux a tellement de boilerplate qu'il amène une complexité non nécessaire aux applications simples.
  </Typography>

        <Typography variant="body1" gutterBottom>
        </Typography>
        <List >
          <ListItem>  <ListItemText primary="Progression prévue:" /></ListItem>

          <ListItem>  <ListItemText primary="1 - Design: Utiliser des styled components plutôt que Material UI pour s'entrainer un peu à utiliser le CSS pur " /></ListItem>
          <ListItem><ListItemText primary="2 - Ecrire les tests front" /></ListItem>
          <ListItem><ListItemText primary="3 - Construire le back en test driven dev" /></ListItem>
          <ListItem><ListItemText primary="4 - E2E tests pour toutes les fonctionnalités" /></ListItem>
          <ListItem><ListItemText primary="5 - deploy avec heroku" /></ListItem>
          <ListItem><ListItemText primary="idées : drag and drop tasks depuis le admin panel (comme sur Jira)" /></ListItem>


        </List>


      </Grid>
    </Grid>
  </Paper>)


export default Home