import React, { useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Loader from '../loader/loader';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router";
import { requestSingleNews } from '../../features/newsItem/actions';
import Comments from '../сomments/сomments';
import classes from './single-news.module.css';

function SingleNews() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {newsItems, isLoaded} = useSelector(({ newsItems }) => newsItems);
  const newsItem = newsItems[id];
  
  useEffect(() => {
    if (newsItem) return;
    dispatch(requestSingleNews(id));
  }, []);


  return(
    !isLoaded ? <Loader /> : (
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
              title={newsItem?.item.title}
              subheader={""}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <Button href={newsItem?.item.url} variant="outlined" color="primary"> Read more </Button>
              </Typography>
            </CardContent>

            <CardActions>
              <IconButton>
                <StarIcon />
                <Typography color="textSecondary" component="p"> &nbsp; {newsItem?.item.score} </Typography>     
              </IconButton>

              <IconButton>
                <PersonIcon />
                <Typography color="textSecondary" component="p"> &nbsp; {newsItem?.item.by} </Typography>     
              </IconButton>

            </CardActions>
          </Card>
        </Grid>

        <Comments />
      </Grid>
    )
  );
}

export default SingleNews;
