import { Box } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Header from './components/header/header';
import ItemList from './components/item-list/item-list';
import Title from './components/title/title';
import SingleNewsItem from './components/single-news-item/single-news-item';
import useNews from './hooks/use-news';

import './scss/app.sass';
import './scss/components/news-item.sass';

const App = () => {
  const handleRefreshNews = useNews();

  return (
    <Box className="wrapper">
      <Header />

      <br />
      <br />
      <br />
      <br />

      <Switch>
        <Route path="/" exact>
          <Title title="Latest News" handleRefreshNews={handleRefreshNews} />
          <ItemList />
        </Route>
        <Route path="/item/:id" component={SingleNewsItem} />
      </Switch>
    </Box>
  );
};

export default App;
