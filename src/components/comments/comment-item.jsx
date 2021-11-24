import { Avatar, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { getLocalDateFormat, textParser } from '../../utils/utils';


function CommentItem({ item }){

  const parsedText = textParser(item.text);
  const commentPostTime = getLocalDateFormat(item.time);

  return (
    <Paper style={{ padding: "20px 20px", margin: "10px 0" }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="User Avatar" src={""} />
        </Grid>
        <Grid item>
          <h4 style={{ margin: 0, textAlign: "left" }}> {item.by} </h4>
          <p style={{ textAlign: "left" }}>
            {parsedText}
          </p>
          <p style={{ textAlign: "left", color: "gray" }}> {commentPostTime}  </p>

        </Grid>
      </Grid>
    </Paper>
  );

}

export default CommentItem;