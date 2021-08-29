import React from 'react';
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import NewsList from '../news-list/news-list';

const useStyles = makeStyles(() => ({
  mt: {
    marginTop: '20px'
  }
}));


function Main({ stories }) {
  const classes = useStyles();
  return(
    <div>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={10} className={classes.mt}>
            <Typography variant="h4"> Lastest News </Typography>
          </Grid>
          <Grid item xs={2} className={classes.mt}>
            <Button variant="contained" color="primary"> Refresh </Button>
          </Grid>
        </Grid>
      </Grid>
      <NewsList stories={stories} />
    </div>
  );
}

export default Main;

