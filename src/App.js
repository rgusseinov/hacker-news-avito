import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import ItemList from './components/item-list/item-list';
import Header from './components/header/header';
import classes from './App.module.css';
import SingleItem from './components/single-item/single-item';
import { useDispatch, useSelector } from 'react-redux';
import { getTopStories } from './api/api';
import { ITEMS_LIMIT } from './utils/utils';
import { loadItems } from './store/actions';
import Loader from './components/loader/loader';

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.itemsReducer);


  useEffect(() => {

    const requestStories = async() => {
      const result = await getTopStories();
      const itemIds = result.slice(0, ITEMS_LIMIT) || [];
      dispatch(loadItems(itemIds));
    };

    requestStories();

  }, []);

  return (
    <Container maxWidth="md">
      <div className={classes.wrapper}>
        <Header />
        {
          loading ? <Loader /> : (
            <Switch>
              <Route path="/" exact>
                <ItemList />
              </Route>
              <Route path="/item/:id" component={SingleItem} />
            </Switch>
          )
        }
      </div>
    </Container>
  );
}

export default App;
