import { Grid } from '@material-ui/core';
import React from 'react';
import useItemList from './useItemList';
import Item from '../item/item';
import Loader from '../loader/loader';

function ItemList({ loading }){
  const { newsArray } = useItemList();

  return (
    <Grid container spacing={3}>
      {
        loading ? <Loader /> : (  
          newsArray && newsArray.map((item, index) => 
            <Item
              key={index}
              item={item}
            />)
        )
      }
    </Grid>
  );
}

export default ItemList;
