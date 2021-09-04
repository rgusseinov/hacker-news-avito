import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { loadNews } from './features/news/actions';
import { TIME_INTERVAL } from './utils/utils';
import Footer from './components/footer/footer';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Main from './components/pages/main-page';
import PageNotFound from './components/pages/page-404';
import SingleNews from './components/single-news/single-news';
import { loadNewsItem } from './features/newsItem/actions';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    '& a': {
      color: '#fff',
      textDecoration: 'none'
    },
  },
  mainContainer: {
    display: 'flex',
    minHeight: '96vh',
    flexDirection: 'column'
  },
  content: {
    flex: '1 1 auto'
  },  
}));

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadNews());
    dispatch(loadNewsItem());

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
  
  const classes = useStyles();
  return (
    // eslint-disable-next-line react/jsx-no-duplicate-props
    <div className="App" className={classes.mainContainer}>
      <Container maxWidth="md" className={classes.content}>

        <AppBar position="static">            
          <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu"> 
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
