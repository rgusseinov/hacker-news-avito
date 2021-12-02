import React from 'react';
import { Avatar, Grid, Paper } from '@material-ui/core';
import { getLocalDateFormat, textParser } from '../../utils/utils';

const CommentItem = ({ item }) => {
  const parsedText = textParser(item.text);
  const commentPostTime = getLocalDateFormat(item.time);
  return (
    <Paper>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="User Avatar" />
        </Grid>
        <Grid item>
          <h4>{item.by}</h4>
          <p>{parsedText}</p>
          <p>{commentPostTime}</p>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CommentItem;
