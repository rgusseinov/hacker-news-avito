import React from 'react';
import {  Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import classes from './news-item.module.css';

function NewsItem(){


  return(
    <Grid item xs={12}>
      <Card>
        <CardHeader
          title={<Link to={`/news/${"0"}`} className={classes.titleLink}> Title here </Link>}
          subheader={"date"}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <Button href={`/news/${"0"}`} variant="contained"> Read more </Button>
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton>
            <StarIcon />
            <Typography color="textSecondary" component="p"> &nbsp; Score </Typography>     
          </IconButton>

          <IconButton>
            <PersonIcon />
            <Typography color="textSecondary" component="p"> &nbsp; Created by </Typography>     
          </IconButton>

        </CardActions>
      </Card>
    </Grid>
  );
}

export default NewsItem;
