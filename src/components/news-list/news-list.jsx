import { Grid } from '@material-ui/core';
import React from 'react';
import NewsItem from '../news-item/news-item';

function NewsList(){

  return(
    <Grid container spacing={3}>
      <NewsItem />
      <NewsItem />    
    </Grid>
  );
}

export default NewsList;

