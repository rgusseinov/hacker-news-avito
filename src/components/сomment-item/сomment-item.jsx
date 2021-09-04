import { Avatar, Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getItemById } from '../../api/api';
import { getLocalDateFormat, textParser } from '../../utils/utils';
import CommentList from '../сomment-list/сomment-list';
import useCommentItem from './useCommentItem';

function CommentItem({ commentId }){

  const { comment, kidsShowed, handleShowSubComments } = useCommentItem(commentId);

  console.log({comment});

  const parseText = textParser(comment.text);
  const commentPostDate = getLocalDateFormat(comment.time);

  return (
    <div>
      <Paper style={{ padding: "20px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="User Avatar" src={""} />
          </Grid>
          <Grid item>
            <h4 style={{ margin: 0, textAlign: "left" }}> {comment.by} </h4>
            <p style={{ textAlign: "left" }}>
            { parseText}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}> { commentPostDate } </p>
            
            {
              comment.kids && !kidsShowed ? (
                <Grid item>
                  <a href="#" onClick={handleShowSubComments}>Show more </a> {comment.kids.length}
                </Grid>
              ) : (
                <CommentList commentIds={comment.kids} />
              )
            }

          </Grid>
        </Grid>        
        
      </Paper>
    </div>
  );

}

export default CommentItem;
