import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../item/item';

function ItemList(){
  const {items} = useSelector((state) => state.itemsReducer);

  return(
    <Grid container spacing={3}>
      {
        items && items.map(item => 
          <Item 
            key={item.id}
            item={item}
          />)
      }
    </Grid>
  );
}

export default ItemList;
