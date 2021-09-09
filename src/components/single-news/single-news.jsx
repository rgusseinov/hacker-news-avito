import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import { getLocalDateFormat } from '../../utils/utils';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Loader from '../loader/loader';
import Comments from '../сomments/сomments';
import useSingleNews from './useSingleNews';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({}));


function SingleNews() {

  const classes = useStyles();
  const singleNews = useSingleNews();
  if (!singleNews) return null;

  // console.log(singleNews);

  const { item, isLoaded } = singleNews;
  const storyDate = getLocalDateFormat(item.time);

  
  return(
    !isLoaded ? <Loader /> : (
      <Grid container>
        <Grid item xs={12} className={classes.mt}>
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
              title={item.title}
              subheader={storyDate}
            />
            {/* <CardMedia
              className={classes.media}
              component="header"
            /> */}
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <Button href={item.url} variant="outlined" color="primary"> Read more </Button>
              </Typography>
            </CardContent>

            <CardActions>
              <IconButton>
                <StarIcon />
                <Typography color="textSecondary" component="p"> &nbsp; {item.score} </Typography>     
              </IconButton>

              <IconButton>
                <PersonIcon />
                <Typography color="textSecondary" component="p"> &nbsp; {item.by} </Typography>     
              </IconButton>

            </CardActions>
          </Card>
        </Grid>
        {/* <Comments /> */}
      </Grid>
    )
  );
}

export default SingleNews;
