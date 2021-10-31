import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import classes from './comments.module.css';
import CommentList from './comment-list';
import useComments from './useComments';

function Comments(){
  useComments();
  return (
    <Grid item xs={12}>
      <Grid container className={classes.boxWrapper}>
        <Grid item xs={10}>
          <Typography variant="h5"> Comments N </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<RefreshIcon />}
            onClick={() => {}}
          > Refresh </Button>
        </Grid>        
        <Grid item xs={12}>
          <CommentList />
        </Grid>          
      </Grid>
    </Grid>
  );
}

export default Comments;
