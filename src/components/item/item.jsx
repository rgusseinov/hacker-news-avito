import React, { useEffect, useState } from 'react';
import {  Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import classes from './news-item.module.css';

function Item({ id }){
  
  const [item, setItem] = useState({});

  useEffect(() => {
    const getStoryItem = async () => {
      const request = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
      return request.json();
    };
    getStoryItem().then(data => {
      setItem(data);
    });
  }, [id]);
  
  // console.log(`item`, item);

  return(
    <Grid item xs={12}>
      <Card>
        <CardHeader
          title={<Link to={`/item/${id}`} className={classes.titleLink}>  { item.title } </Link>}
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
            <Typography color="textSecondary" component="p"> &nbsp; { item.score } </Typography>     
          </IconButton>

          <IconButton>
            <PersonIcon />
            <Typography color="textSecondary" component="p"> &nbsp; { item.by } </Typography>     
          </IconButton>

        </CardActions>
      </Card>
    </Grid>
  );
}

export default Item;
