import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Route, Switch } from 'react-router-dom';
import Article from './components/article/article';
import Main from './components/main-page/main-page';
import { useDispatch } from 'react-redux';
import { loadStories } from './features/items/actions';
import { TIME_INTERVAL } from './utils/utils';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadStories());

    window.setInterval(() => {
      dispatch(loadStories());
    }, TIME_INTERVAL);
    
  }, []);

  const handleRefreshStories = () => {
    dispatch(loadStories());
  };
  
  const classes = useStyles();
  return (
    <div className="App">
        <Container maxWidth="md">

          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> Hacker News </IconButton>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route path="/" exact>
              <Main handleRefreshStories={handleRefreshStories} />
            </Route>
            <Route path="/article/:id" component={Article} />
          </Switch>

        </Container>
        
        {/* <Footer /> */}
    </div>
  );
}

export default App;
