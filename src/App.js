import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import ItemList from './components/item-list/item-list';
import useNews from './useNews';
import SingleItem from './components/single-item/single-item';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import classes from './App.module.css';


function App() {
  
  const handleRefreshNews = useNews();
  return (
    <Container maxWidth="md">
      <div className={classes.wrapper}>
        <Header />
        <Grid container spacing={3} className={classes.header}>
          <Grid item xs={10}>
            <Typography variant="h4"> Lastest News </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<RefreshIcon />}
              onClick={handleRefreshNews}
            > Refresh </Button>
          </Grid>
        </Grid>
        <Switch>
          <Route path="/" exact>
            <ItemList />
          </Route>
          <Route path="/item/:id" component={SingleItem} />
        </Switch>          
      </div>
    </Container>
  );
}

export default App;
