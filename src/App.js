import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import ItemList from './components/item-list/item-list';
import Header from './components/header/header';
import classes from './App.module.css';
import SingleItem from './components/single-item/single-item';
import { useDispatch } from 'react-redux';
import { getTopStories } from './api/api';
import { ITEMS_LIMIT, TIME_INTERVAL } from './utils/utils';
import { loadNews } from './store/actions';

function App() {

  const dispatch = useDispatch();
  const requestStories = async() => {
    try {
      const result = await getTopStories();
      const newsIds = result.slice(0, ITEMS_LIMIT) || [];
      dispatch(loadNews(newsIds));
    } catch (err) {
      console.error(err);
    }

  };

  useEffect(() => {
    requestStories();
    const timer = setInterval(() => {
      requestStories();
    }, TIME_INTERVAL);

    return () => clearTimeout(timer);    
  }, []);

  const handleRefreshNews = () => requestStories();

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
