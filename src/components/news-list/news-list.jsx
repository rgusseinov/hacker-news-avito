import { Grid } from '@material-ui/core';
import React from 'react';
import NewsItem from '../news-item/news-item';

function NewsList({ stories }){
  
  return(
    <Grid container spacing={3}>
      {
        stories.splice(0, 20).map(storyId => {
          return (<NewsItem
                    storyId={storyId}
                    key={storyId}
                  />);
        })
      }
    </Grid>
  );
}

export default NewsList;

