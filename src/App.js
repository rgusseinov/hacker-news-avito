import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import ItemList from './components/item-list/item-list';
import Header from './components/header/header';
import classes from './App.module.css';
import SingleItem from './components/single-item/single-item';

function App() {

  return (
    <Container maxWidth="md">
      <div className={classes.wrapper}>
        <Header />
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
