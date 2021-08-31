import { Avatar, Divider, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getItemById } from '../../api/api';
import CommentList from '../сomment-list/сomment-list';

const useStyles = makeStyles(() => ({
  mmleft: {
    marginLeft: '20px',
    border: '1px solid red'
  }
}));


function CommentItem({ commentId }){

  const classes = useStyles();
  
  const [comment, setComment] = useState({});
  const [subComments, setSubComments] = useState(null);

  useEffect(() => {
    const requestGetComment = async() => {
      const data = await getItemById(commentId);
      setComment(data);
    };
    requestGetComment();

  }, [commentId]);

  const handleShowMoreComment = () => {
    const subCommentsMarkup = (
      <CommentList comments={comment.kids} />
    );
    setSubComments(subCommentsMarkup);
  };

  // const commentDate = new Date(comment.time * 1000);
  let doc = new DOMParser().parseFromString(comment.text, 'text/html');

  return (
    <div style={{ padding: 14 }} className="App">
      <Paper style={{ padding: "40px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={""} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}> {comment.by} </h4>
            <p style={{ textAlign: "left" }}>
            { doc.body.textContent }
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              posted 1 minute ago
            </p>
          </Grid>

      {
        comment.kids ? (<p><a href="#" onClick={handleShowMoreComment}>Show more </a> {comment.kids.length}</p>) : ''
      }
      {
      subComments ? 
        <div className={classes.mmleft}>
            {
              subComments
            }
        </div>
        : null
      }


        </Grid>
        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
      </Paper>
    </div>
  );

/*   return(
    <div>
      <span> { comment.by } posted on 10.10.2021 14:55:20 | </span>
      <p>
        { doc.body.textContent }
      </p>
      <br />
      {
        comment.kids ? (<p><a href="#" onClick={handleShowMoreComment}>Show more </a> {comment.kids.length}</p>) : ''
      }
      {
      subComments ? 
        <div className={classes.mmleft}>
            {
              subComments
            }
        </div>
        : null
      }
      <hr />
    </div>
  ); */


}

export default CommentItem;

