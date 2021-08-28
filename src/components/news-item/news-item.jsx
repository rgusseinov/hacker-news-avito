import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
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



function NewsItem(){
  const classes = useStyles();

  return(
    
    <Grid item xs={12} className={classes.newsItem}>
    <Box>                
      <Typography variant="h5">
        Apple agrees to settle potential class action suit by U.S. developers
      </Typography>
    </Box>
   
    <Box className={classes.newsFooter}>
      <Box> 
        <Typography component="body1"> Author </Typography>
        <Typography component="body1"> Akre </Typography>
      </Box>
      <Box> 
        <Typography component="body1"> Rating </Typography>
        <Typography component="body1"> 5 points </Typography>                  
      </Box>
      <Box> 
        <Typography component="body1"> Published date </Typography>
        <Typography component="body1"> 55 minutes ago </Typography>                  
      </Box>            
    </Box>
    </Grid>

  )
}

export default NewsItem;

