import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Item from '../item/item';

function ItemList(){
  const [itemIds, setItemIds] = useState([]);

  useEffect(() => {

    const getTopStories = async () => {
      const request = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
      return request.json();      
    };
    
    getTopStories().then(data => {
      const limitItemIds = data.slice(0, 10);
      setItemIds(limitItemIds);
    });

  }, []);


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
