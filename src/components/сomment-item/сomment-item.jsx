import { Avatar, Grid, Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestCommentsContent } from '../../features/comment-content/actions';
// import { getLocalDateFormat, textParser } from '../../utils/utils';


function CommentItem({ commentId }){

  // const { comment} = useCommentItem(commentId);
  // const parseText = '';
  // const commentPostDate = '';  
  // const commentItem = {};
  // console.log(`commentId`, commentId);

  const dispatch = useDispatch();
  const {commentsContent } = useSelector(({ commentsContent }) => commentsContent);
  const comments = commentsContent[commentId];
  // const { item } = comments?.item;

  // console.log(`commentsContent`, comments);
  
  useEffect(() => {
    if (comments) return;
    dispatch(requestCommentsContent(commentId));
  }, [commentId]);


  return (
    <div>
      <Paper style={{ padding: "20px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="User Avatar" src={""} />
          </Grid>
          <Grid item>
            <h4 style={{ margin: 0, textAlign: "left" }}> {comments?.item.by} </h4>
            <p style={{ textAlign: "left" }}>
              { comments?.item.text }
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>   </p>

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
    </div>
  );

}

export default CommentItem;
