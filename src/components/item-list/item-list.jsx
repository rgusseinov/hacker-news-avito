import { Grid } from '@material-ui/core';
import React from 'react';
import useItemList from './useItemList';
import Item from '../item/item';
import Loader from '../loader/loader';

function ItemList(){
  const { newsArray, loading } = useItemList();
    
  return (
    <Grid container spacing={3}>
      {
        loading ? <Loader /> : (
          newsArray.map(item =>
            <Item
              key={item.id}
              item={item}
            />)
        )
      }
    </Grid>
  );
}

export default ItemList;
