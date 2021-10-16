import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import Comments from '../сomments/сomments';
import classes from './single-news.module.css';

function SingleNews() {
  
  return(
    <Grid container>
      <Grid item xs={12} className={classes.singleNewsRow}>
        <Grid container>
          <Grid item>
            <ArrowBackIcon />
          </Grid>
          <Grid item xs={2}>
            <Typography>
              <Link to={"/"}> Back to list </Link>
            </Typography>
          </Grid>
        </Grid>       
      </Grid>

      <Grid item xs={12}>
        <Card className={classes.root}>
          <CardHeader
            title={"Test title"}
            subheader={""}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <Button href={"#"} variant="outlined" color="primary"> Read more </Button>
            </Typography>
          </CardContent>

          <CardActions>
            <IconButton>
              <StarIcon />
              <Typography color="textSecondary" component="p"> 10 </Typography>     
            </IconButton>

            <IconButton>
              <PersonIcon />
              <Typography color="textSecondary" component="p"> &nbsp; Ruslan0688 </Typography>     
            </IconButton>

          </CardActions>
        </Card>
      </Grid>

      <Comments />
    </Grid>
  );
}

export default SingleNews;
