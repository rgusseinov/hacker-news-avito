import React from 'react';
import {  Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getLocalDateFormat } from '../../utils/utils';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import useNewsItem from './useNewsItem';
import classes from './news-item.module.css';

function NewsItem({ newsItemId }){

  const newsItem = useNewsItem(newsItemId);
  const storyDate = getLocalDateFormat(newsItem.time);

  return(
    <Grid item xs={12}>
      <Card>
        <CardHeader
          title={<Link to={`/news/${newsItem.id}`} className={classes.titleLink}> { newsItem.title } </Link>}
          subheader={storyDate}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <Button href={`/news/${newsItem.id}`} variant="contained"> Read more </Button>
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton>
            <StarIcon />
            <Typography color="textSecondary" component="p"> &nbsp; {newsItem.score} </Typography>     
          </IconButton>

          <IconButton>
            <PersonIcon />
            <Typography color="textSecondary" component="p"> &nbsp; {newsItem.by} </Typography>     
          </IconButton>

        </CardActions>
      </Card>
    </Grid>
  );
}

export default NewsItem;
