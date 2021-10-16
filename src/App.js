import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Main from './components/pages/main-page';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import classes from './App.module.css';

function App() {

  return (
    <Container maxWidth="md">
      <div className={classes.wrapper}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Container>
  );
}

export default App;
