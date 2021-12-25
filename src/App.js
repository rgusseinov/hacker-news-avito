import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/header/header';
import ItemList from './components/item-list/item-list';
import Title from './components/title/title';
import SingleNewsItem from './components/single-news-item/single-news-item';
import useNews from './hooks/use-news';
import Error from './components/error/error';
import './scss/app.sass';

const App = () => {
  const handleRefreshNews = useNews();

  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/hacker-news-avito/" exact>
            <Title title="Top News" handleRefreshNews={handleRefreshNews} />
            <ItemList />
          </Route>
          <Route path="/item/:id" component={SingleNewsItem} />
          <Error />
        </Switch>
      </div>
    </div>
  );
};

export default App;
