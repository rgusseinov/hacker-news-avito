import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getLocalDateFormat } from '../../utils/utils';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import useNewsItem from './useNewsItem';

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
  },

  root: {
    // maxWidth: 345,
  },
  title: {
    textDecoration: 'none'
  },
  media: {
    height: 0,
  },

}));


function NewsItem({ newsItemId }){

  const newsItem = useNewsItem(newsItemId);
  const classes = useStyles();
  const storyDate = getLocalDateFormat(newsItem.time);

  return(
    <Grid item xs={12} className={classes.newsItem}>
      <Card className={classes.root}>
        <CardHeader
          title={<Link to={`/news/${newsItem.id}`} className={classes.title}> { newsItem.title } </Link>}
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
