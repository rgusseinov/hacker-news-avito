import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../loader/loader';
import NewsItem from '../news-item/news-item';
import useItems from './useItems';

function NewsList(){

  const storyList = useItems();
  const { isStoriesLoaded } = useSelector(({ stories }) => stories);

  return(
    <Grid container spacing={3}>
      {  
        !isStoriesLoaded ? <Loader /> : (
          
            storyList && storyList.splice(0, 100).map(storyId => {
              return (<NewsItem
                        storyId={storyId}
                        key={storyId}
                      />);
            })
          
        )
      }


      
    </Grid>
  );
}

export default NewsList;

