import { Avatar, Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getLocalDateFormat, textParser } from '../../utils/utils';
import CommentList from '../сomment-list/сomment-list';
import useCommentItem from './useCommentItem';

function CommentItem({ commentItem }){

  // const { comment} = useCommentItem(commentId);
  const parseText = textParser(commentItem.text);
  const commentPostDate = getLocalDateFormat(commentItem.time);
  

  return (
    <div>
      <Paper style={{ padding: "20px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="User Avatar" src={""} />
          </Grid>
          <Grid item>
            <h4 style={{ margin: 0, textAlign: "left" }}> {commentItem.by} </h4>
            <p style={{ textAlign: "left" }}>
              { parseText}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>  </p>
            
          </Grid>
        </Grid>
      </Paper>
    </div>
  );

}

export default CommentItem;
