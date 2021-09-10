import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { loadNewsIds } from './features/news/actions';
import { Container } from '@material-ui/core';
import Main from './components/pages/main-page';
import PageNotFound from './components/pages/page-404';
import SingleNews from './components/single-news/single-news';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import classes from './App.module.css';
import { TIME_INTERVAL } from './utils/utils';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadNewsIds());

    const timer = setInterval(() => {
      dispatch(loadNewsIds());
    }, TIME_INTERVAL);
    
    return () => {
      clearInterval(timer);
    };
    
  }, []);

  const handleRefreshStories = () => {
    dispatch(loadNewsIds());
  };
  
  return (
    <Container maxWidth="md">
      <div className={classes.wrapper}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Main handleRefreshStories={handleRefreshStories} />
          </Route>
          <Route path="/news/:id" component={SingleNews} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </Container>
  );
}

export default App;
