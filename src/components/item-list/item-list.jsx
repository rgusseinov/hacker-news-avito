import { Grid } from '@material-ui/core';
import React from 'react';
import Item from '../item/item';

function ItemList({ itemIds }){
  return(
    <Grid container spacing={3}>
      {
        itemIds && itemIds.map(id => 
          <Item 
            key={id} 
            id={id}
          />)
      }
    </Grid>
  );
}

export default ItemList;
