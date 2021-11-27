import React from 'react';
import { Link } from 'react-router-dom';
import {  Button, 
  Card, 
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import { getLocalDateFormat } from '../../utils/utils';
import classes from './news-item.module.css';

function Item({ item }){
  const newsItemPostTime = getLocalDateFormat(item.time);
  return(
    <Grid item xs={12}>
      <Card>
        <CardHeader
          title={<Link to={`/item/${item.id}`} className={classes.titleLink}>{item.title}</Link>}
          subheader={`Date: ${newsItemPostTime}`} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <Button href={`/item/${item.id}`} variant="contained"> Read more </Button>
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <StarIcon />
            <Typography color="textSecondary" component="p">&nbsp;{item.score}</Typography>     
          </IconButton>
          <IconButton>
            <PersonIcon />
            <Typography color="textSecondary" component="p">&nbsp;{item.by}</Typography>     
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Item;
