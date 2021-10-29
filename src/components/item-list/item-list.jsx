import { Grid } from '@material-ui/core';
import React from 'react';
import useItemList from './useItemList';
import Item from '../item/item';

function ItemList(){
  const { itemsArray } = useItemList();
    
  return (
    <Grid container spacing={3}>
      {
        itemsArray && itemsArray.map((item, index) => 
          <Item
            key={index}
            item={item}
          />)
      }
    </Grid>
  );

}

export default ItemList;
