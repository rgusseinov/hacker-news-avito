import React from 'react';
import { Grid } from '@material-ui/core';
import Item from '../item/item';
import Loader from '../loader/loader';
import Error from '../error/error';
import useItemList from './use-item-list';

const ItemList = () => {
  const { newsArray, loading, isFail } = useItemList();
  return (
    <Grid container spacing={3}>
      {
        loading ? <Loader /> :
          isFail ? <Error /> : (
            newsArray.map(item =>
              <Item
                key={item.id}
                item={item}
              />))
      }
    </Grid>
  );
};

export default ItemList;
