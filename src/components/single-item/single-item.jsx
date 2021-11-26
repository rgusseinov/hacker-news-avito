import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import Comments from '../comments/comments';
import useNewsItem from './useNewsItem';
 
function SingleItem(){
  const { item } = useNewsItem();  
  return (
    <Grid container>
      <>
        <Grid item xs={12} className={""}>
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
          <Card className={""}>
            <CardHeader
              title={item?.title}
              subheader={item?.type}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <Button href={item?.url} variant="outlined" color="primary"> Read more </Button>
              </Typography>
            </CardContent>

            <CardActions>
              <IconButton>
                <StarIcon />
                <Typography color="textSecondary" component="p"> &nbsp; {item?.by}  </Typography>     
              </IconButton>

              <IconButton>
                <PersonIcon />
                <Typography color="textSecondary" component="p"> &nbsp; {item?.score}  </Typography>     
              </IconButton>

            </CardActions>
          </Card>
        </Grid>
        <Comments />
      </>
    </Grid>
  );
}

export default SingleItem;
