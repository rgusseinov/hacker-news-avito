import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import ItemList from './components/item-list/item-list';
import Header from './components/header/header';
import classes from './App.module.css';
import SingleItem from './components/single-item/single-item';

function App() {

  const [itemIds, setItemIds] = useState([]);

  useEffect(() => {

    const getTopStories = async () => {
      const request = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
      return request.json();
    };
    
    getTopStories().then(data => {
      const limitItemIds = data.slice(0, 10);
      setItemIds(limitItemIds);
    });

  }, []);

  return (
    <Container maxWidth="md">
      <div className={classes.wrapper}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <ItemList itemIds={itemIds} />
          </Route>
          <Route path="/item/:id" component={SingleItem} />
        </Switch>
      </div>
    </Container>
  );
}

export default App;
