import React, { useEffect, useState } from 'react';
import { Badge, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Icon, IconButton, Link, makeStyles, Typography } from '@material-ui/core';
import { getItemById } from '../../api/api';
import { useParams } from 'react-router-dom';
import CommentList from '../сomment-list/сomment-list';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import { getLocalDateFormat } from '../../utils/utils';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
  const articleParams = useParams();

  useEffect(() => {
    const requestGetStory = async() => {
      const data = await getItemById(articleParams.id);
      setStory(data);
    };
    requestGetStory();
  }, []);
  
  const storyDate = getLocalDateFormat(story.time);

  return(
    <Grid container>

      <Grid item xs={12} className={classes.mt}>
        <Grid container>
          <Grid item>
            <ArrowBackIcon />
          </Grid>

          <Grid item xs={2}>
            <Typography> <a href={"/"}> Back to list </a> </Typography>
          </Grid>

        </Grid>
       
      </Grid>

      <Grid item xs={12} className={classes.newsItem}>
        <Card className={classes.root}>
          <CardHeader
            title={story.title}
            subheader={storyDate}
          />
          <CardMedia
            className={classes.media}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <Button href={story.url} variant="outlined" color="primary"> Read more </Button>
            </Typography>
          </CardContent>

          <CardActions>
            <IconButton>
              <StarIcon />
              <Typography color="textSecondary" component="p"> &nbsp; {story.score} </Typography>     
            </IconButton>

            <IconButton>
              <PersonIcon />
              <Typography color="textSecondary" component="p"> &nbsp; {story.by} </Typography>     
            </IconButton>

          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={10} className={classes.mt}>
        
          <Typography variant="h6" color="textSecondary"> Comments (14)  </Typography>
      
      </Grid>

      <Grid item xs={2} className={classes.mt}>
        <Button variant="contained" color="primary"> Refresh </Button>
      </Grid>

      <Grid item xs={12} className={classes.mt}>
        <CommentList />
      </Grid>
    </Grid>
  );
}

export default Article;



{/* <Grid item xs={12} className={classes.mt}>
<a href={"/"}> Back to story list  </a>
</Grid>

<Grid item xs={12} className={classes.mt}>
<Typography variant="h4" color="primary"> {story.title} </Typography>
</Grid>

<Grid item xs={12} className={classes.mt}>
  <a href={story.url}> Open this news  </a>
</Grid>


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
        <Typography variant="body1"> Date </Typography>
        <Typography variant="body1"> { storyDate } </Typography>                  
      </Box>            
    </Box>
  </Grid>          
</Grid>
</Grid>



<Grid container spacing={3}>
<Grid item xs={10} className={classes.mt}>
  <Typography variant="h6"> Comments  </Typography>
</Grid>
<Grid item xs={2} className={classes.mt}>
  <Button variant="contained" color="primary"> Refresh </Button>
</Grid>
</Grid>

<CommentList /> */}