import React from 'react';
import { Button, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NewsList from './components/news-list/news-list';
import Footer from './components/footer/footer';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginTop: '20px'
  },
  action: {
    marginTop: '20px'
  },
}));



function App() {
  const classes = useStyles();
  return (
    <div className="App">
        <Container maxWidth="md">

          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> Hacker News </IconButton>
            </Toolbar>
          </AppBar>

          <Grid container spacing={3}>
            <Grid item xs={10} className={classes.title}>
              <Typography variant="h4"> Latest news </Typography>
            </Grid>
            <Grid item xs={2} className={classes.action}>
              <Button variant="contained" color="primary"> Refresh </Button>
            </Grid>
          </Grid>

          <NewsList />
        </Container>

        <Footer />

    </div>
  );
}

export default App;
