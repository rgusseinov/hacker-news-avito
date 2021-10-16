import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import classes from './comments.module.css';

function Comments(){
  return(
    <Grid item xs={12}>
      <Grid container className={classes.boxWrapper}>
        <Grid item xs={12}>
          <Grid container spacing={3} className={classes.header}>
            <Grid item xs={10}>
              <Typography variant="h5"> Sorry! No comments posted so far. </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<RefreshIcon />}
              > Refresh </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Comments;
