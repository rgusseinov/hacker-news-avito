import React, { useEffect, useState } from 'react';
import { Button, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NewsList from './components/news-list/news-list';
import { getNewStories } from './api/api';
import { Route, Switch } from 'react-router-dom';
import Article from './components/article/article';
import Main from './components/main-page/main-page';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

function App() {

  const [newStories, setNewStories] = useState([]);

  useEffect(() => {
    const requestNewStoryList = async () => {
      const data = await getNewStories();
      setNewStories(data);
    };
    requestNewStoryList();
  
  }, []);

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
              <Main stories={newStories} />
            </Route>
            <Route path="/article/:id" component={Article} />
          </Switch>

        </Container>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
