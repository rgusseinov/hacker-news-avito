import { Grid } from '@material-ui/core';
import React from 'react';
import CommentList from '../сomment-list/сomment-list';

function Comments({ comments }){
  
  // Update comment
  return(
    <Grid item xs={10}>
      <CommentList comments={comments} />
    </Grid>
  );
}

export default Comments;

