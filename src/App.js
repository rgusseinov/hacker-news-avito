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

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadNewsIds());
  }, []);

  const handleRefreshStories = () => {
    dispatch(loadNewsIds());
  };
  
  return (
    <Container maxWidth="md">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Main handleRefreshStories={handleRefreshStories} />
        </Route>
        <Route path="/news/:id" component={SingleNews} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;
