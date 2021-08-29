import React from 'react';
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  mt: {
    marginTop: '20px'
  }
}));

function PageHeading({ title }) {
  const classes = useStyles();
  return(
    <Grid container spacing={3}>
      <Grid item xs={10} className={classes.mt}>
        <Typography variant="h4"> {title} </Typography>
      </Grid>
      <Grid item xs={2} className={classes.mt}>
        <Button variant="contained" color="primary"> Refresh </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeading;

