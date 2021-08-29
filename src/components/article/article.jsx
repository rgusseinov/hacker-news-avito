import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { getItemById } from '../../api/api';
import Comments from '../сomments/сomments';

const useStyles = makeStyles(() => ({
  mt: {
    marginTop: '20px'
  },
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


function Article() {

  const classes = useStyles();
  const [story, setStory] = useState({});

  useEffect(() => {
    const requestGetStory = async() => {
      const data = await getItemById(28344706);
      setStory(data);
    };
    requestGetStory();

  }, []);

  return(
    <Grid item xs={12}>
      <Grid container spacing={3}>
        <Grid item xs={10} className={classes.mt}>
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
              <Typography variant="body1"> </Typography>                  
            </Box>            
          </Box>
        </Grid>
        <Grid item xs={10} className={classes.mt}>
          <Typography variant="h5"> {story.title} </Typography>
        </Grid>

        <Grid item xs={10}>
          <a href={story.url}> Open this news  </a>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={10} className={classes.mt}>
            <Typography variant="h6"> Comments  </Typography>
          </Grid>
          <Grid item xs={2} className={classes.mt}>
            <Button variant="contained" color="primary"> Refresh </Button>
          </Grid>
        </Grid>

        <Comments comments={story.kids}/>

      </Grid>
    </Grid>
  );
}

export default Article;

