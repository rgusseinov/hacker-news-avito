import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { loadNews } from './features/news/actions';
import { TIME_INTERVAL } from './utils/utils';
import Footer from './components/footer/footer';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { Container } from '@material-ui/core';
import Main from './components/pages/main-page';
import PageNotFound from './components/pages/page-404';
import SingleNews from './components/single-news/single-news';
import { loadNewsItems } from './features/newsItem/actions';
// import './App.module.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadNews());
    // dispatch(loadNewsItems());

    const timer = setInterval(() => {
      dispatch(loadNews());
    }, TIME_INTERVAL);
    
    return () => {
      clearInterval(timer);
    };
    
  }, []);

  const handleRefreshStories = () => {
    dispatch(loadNews());
  };
  
  return (
    // eslint-disable-next-line react/jsx-no-duplicate-props
    <div className="App">
      <Container maxWidth="md">

        <AppBar position="static">            
          <IconButton edge="start" color="primary" aria-label="menu"> 
            <Link to="/"> Hacker News </Link>
          </IconButton>            
        </AppBar>

        <Switch>
          <Route path="/" exact>
            <Main handleRefreshStories={handleRefreshStories} />
          </Route>
          <Route path="/news/:id" component={SingleNews} />
          <Route component={PageNotFound} />
        </Switch>

      </Container>
      <Footer />
    </div>
  );
}

export default App;
