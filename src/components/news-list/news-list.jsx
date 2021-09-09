import { Grid } from '@material-ui/core';
import React from 'react';
import { ITEM_LIMIT } from '../../utils/utils';
import Loader from '../loader/loader';
import NewsItem from '../news-item/news-item';
import useNewsList from './useNewsList';

function NewsList(){
  const { news, loading } = useNewsList();
  return(
    <Grid container spacing={3}>
      {
        loading ? <Loader /> : (
          news && news.splice(0, ITEM_LIMIT).map(newsItemId => {
            return (
              <NewsItem
                newsItemId={newsItemId}
                key={newsItemId}
              />
            );
          })
        )
      }
    </Grid>
  );
}

export default NewsList;
