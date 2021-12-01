import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import Comments from '../comments/comments';
import useNewsItem from './use-news-item';
import Loader from '../loader/loader';
import Error from '../error/error';

const SingleNewsItem = () => {
  const { item, loading, isItemsFailed } = useNewsItem();
  return (
    <Grid container>
      {loading ? (
        <Loader />
      ) : isItemsFailed ? (
        <Error />
      ) : (
        <>
          <Grid item xs={12}>
            <Grid container>
              <Grid item>
                <ArrowBackIcon />
              </Grid>
              <Grid item xs={2}>
                <Typography>
                  <Link to={'/'}> Back to list </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title={item?.title} subheader={item?.type} />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <Button href={item?.url} variant="outlined" color="primary">
                    Read more
                  </Button>
                </Typography>
              </CardContent>

              <CardActions>
                <IconButton>
                  <StarIcon />
                  <Typography color="textSecondary" component="p">
                    &nbsp;{item?.by}
                  </Typography>
                </IconButton>

                <IconButton>
                  <PersonIcon />
                  <Typography color="textSecondary" component="p">
                    &nbsp;{item?.score}
                  </Typography>
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Comments />
        </>
      )}
    </Grid>
  );
};

export default SingleNewsItem;
