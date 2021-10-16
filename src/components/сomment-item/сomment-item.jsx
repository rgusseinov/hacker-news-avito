import { Avatar, Grid, Paper } from '@material-ui/core';
import React from 'react';

function CommentItem(){
  return (
    <Paper style={{ padding: "20px 20px", margin: "10px 0" }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="User Avatar" src={""} />
        </Grid>
        <Grid item>
          <h4 style={{ margin: 0, textAlign: "left" }}> Created by </h4>
          <p style={{ textAlign: "left" }}>  </p>
          <p style={{ textAlign: "left", color: "gray" }}> Posted time </p>
        </Grid>
      </Grid>
    </Paper>
  );

}

export default CommentItem;
