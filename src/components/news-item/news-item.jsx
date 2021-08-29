import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { getItemById } from '../../api/api';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(() => ({
  newsFooter: {
    display: 'flex',
    flexBasis: '100px',
    flexGrow: 0,
    flexShrink: 1,
    borderBottom: '1px solid #ccc',
    '& > div :nth-child(1)': {
      color: '#A3A3A3'
    },
    margin: '10px 0 0 0',
    '& > div:nth-child(1)': {
      borderRight: '1px solid #ccc',
      paddingRight: '10px',
    },
    '& > div:nth-child(2)': {
      borderRight: '1px solid #ccc',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    '& > div:nth-child(3)': {
      paddingLeft: '10px'
    }    
  }
}));


function NewsItem({ storyId }){

  const [story, setStory] = useState({});

  useEffect(() => {
    const requestGetStory = async() => {
      const data = await getItemById(storyId);
      setStory(data);
    };
    requestGetStory();

  }, [storyId]);

  const classes = useStyles();
  const postDate = new Date(story.time * 1000);

  return(
    <Grid item xs={12} className={classes.newsItem}>
    <Box>
      <Link to={`/article/${story.id}`}>
        <Typography variant="h5">{story.title}</Typography>
      </Link>
    </Box>
   
    <Box className={classes.newsFooter}>
      <Box>
        <Typography variant="body1"> Author </Typography>
        <Typography variant="body1"> {story.by} </Typography>
      </Box>
      <Box> 
        <Typography variant="body1"> Rating </Typography>
        <Typography variant="body1"> {story.score} </Typography>                  
      </Box>
      <Box> 
        <Typography variant="body1"> Published date </Typography>
        <Typography variant="body1"> { postDate.toLocaleString() } </Typography>                  
      </Box>            
    </Box>
    
    </Grid>
  );
}

export default NewsItem;

