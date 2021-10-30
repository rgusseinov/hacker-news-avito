import { Grid } from '@material-ui/core';
import React from 'react';
import useItemList from './useItemList';
import Item from '../item/item';

function ItemList(){
  const { newsArray } = useItemList();
  return (
    <Grid container spacing={3}>
      {
        newsArray && newsArray.map((item, index) => 
          <Item
            key={index}
            item={item}
          />)
      }
    </Grid>
  );

}

export default ItemList;
