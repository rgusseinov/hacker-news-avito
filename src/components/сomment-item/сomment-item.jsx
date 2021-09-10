import { Avatar, Grid, Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestCommentsContent } from '../../features/comment-content/actions';
import { getLocalDateFormat, textParser } from '../../utils/utils';


function CommentItem({ commentId }){
  const dispatch = useDispatch();
  const {commentsContent } = useSelector(({ commentsContent }) => commentsContent);
  const comments = commentsContent[commentId];
  
  useEffect(() => {
    if (comments) return;
    dispatch(requestCommentsContent(commentId));
  }, [commentId]);

  
  const parseText = textParser(comments?.item.text);
  const commentPostTime = getLocalDateFormat(comments?.item.time);

  return (
    <Paper style={{ padding: "20px 20px", margin: "10px 0" }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="User Avatar" src={""} />
        </Grid>
        <Grid item>
          <h4 style={{ margin: 0, textAlign: "left" }}> {comments?.item.by} </h4>
          <p style={{ textAlign: "left" }}>
            { parseText }
          </p>
          <p style={{ textAlign: "left", color: "gray" }}> { commentPostTime } </p>

          {
            comments?.item.kids ? (
              <Grid item>
                <a href="#">Show more </a> {comments?.item.kids.length}
              </Grid>
            ) : null
          }
        </Grid>
      </Grid>
    </Paper>
  );

}

export default CommentItem;
