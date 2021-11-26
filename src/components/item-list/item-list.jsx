import { Button, Grid } from '@material-ui/core';
import React from 'react';
import useItemList from './useItemList';
import Item from '../item/item';
import Loader from '../loader/loader';
import RefreshIcon from '@material-ui/icons/Refresh';
import Error from '../error/error';


function ItemList({ handleRefreshNews }){
  const { newsArray, loading, isFail } = useItemList();
    
  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<RefreshIcon />}
          onClick={handleRefreshNews}
        > Refresh </Button>
      </Grid>
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
}

export default ItemList;
