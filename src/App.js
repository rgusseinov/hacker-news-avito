import React from 'react';
import { Route, Switch } from 'react-router-dom';
import useNews from './useNews';
import Header from './components/header/header';
import ItemList from './components/item-list/item-list';
import { Container } from '@material-ui/core';
import Title from './components/title/title';
import SingleNewsItem from './components/single-news-item/single-news-item';
import classes from './App.module.css';

function App() {
  const handleRefreshNews = useNews();
  
  return (
    <Container maxWidth="md">
      <div className={classes.wrapper}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Title title="Latest News" handleRefreshNews={handleRefreshNews} />
            <ItemList />
          </Route>
          <Route path="/item/:id" component={SingleNewsItem} />
        </Switch>          
      </div>
    </Container>
  );
}

export default App;
