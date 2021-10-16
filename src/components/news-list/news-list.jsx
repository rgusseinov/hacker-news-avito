import { Grid } from '@material-ui/core';
import React from 'react';
import NewsItem from '../news-item/news-item';

function NewsList(){
  return(
    <Grid container spacing={3}>
      <NewsItem
        newsItemId={0}
        key={0}
      />
    </Grid>
  );
}

export default NewsList;
