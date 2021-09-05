import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Link, makeStyles, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import { getLocalDateFormat } from '../../utils/utils';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Loader from '../loader/loader';
import Comments from '../сomments/сomments';
import useSingleNews from './useSingleNews';

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


function SingleNews() {

  const classes = useStyles();
  const { news, loading } = useSingleNews();
  const storyDate = getLocalDateFormat(news.time);
  

  return(
    loading ? <Loader /> : (
      <Grid container>
        <Grid item xs={12} className={classes.mt}>
          <Grid container>
            <Grid item>
              <ArrowBackIcon />
            </Grid>
            <Grid item xs={2}>
              <Typography> <Link href={"/"}> Back to list </Link> </Typography>
            </Grid>
          </Grid>       
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardHeader
              title={news.title}
              subheader={storyDate}
            />
            <CardMedia
              className={classes.media}
              component="header"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <Button href={news.url} variant="outlined" color="primary"> Read more </Button>
              </Typography>
            </CardContent>

            <CardActions>
              <IconButton>
                <StarIcon />
                <Typography color="textSecondary" component="p"> &nbsp; {news.score} </Typography>     
              </IconButton>

              <IconButton>
                <PersonIcon />
                <Typography color="textSecondary" component="p"> &nbsp; {news.by} </Typography>     
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
