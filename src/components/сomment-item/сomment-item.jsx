import { Avatar, Divider, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getItemById, getSubCommentsById } from '../../api/api';
import { getLocalDateFormat, textParser } from '../../utils/utils';

const useStyles = makeStyles(() => ({
  mmleft: {
    marginLeft: '20px',
    border: '1px solid red'
  }
}));


function CommentItem({ commentId }){

  const classes = useStyles();
  
  const [comment, setComment] = useState({});
  const [commentToggle, setCommentToggle] = useState([]);
  const [subComments, setSubComments] = useState(null);

  useEffect(() => {
    const requestGetComment = async() => {
      const data = await getItemById(commentId);
      setComment(data);
    };
    requestGetComment();

  }, [commentId]);


  const handleShowMoreComment = async (id, kids) => {
    const commentList = await getSubCommentsById(kids);
    const subCommentsMarkup = commentList.map(item => {
      return (
        <Grid justifyContent="flex-end" key={item.id} container spacing={2}>
          <Grid item xs={10} spacing={2}>
            <Paper style={{ padding: "20px 20px" }}>
              <p> { textParser(item.text) }  </p>
            </Paper>
          </Grid>
        </Grid>
      );
    });
    setSubComments(subCommentsMarkup);
/* 
    const toggleState = commentToggle;
    if (!toggleState[id]) toggleState.push(id);
    setCommentToggle(); */
  };

  /*

    [
      {1: false},
      {2: true},
      {3: true},
      {4: false}
    ]


  */



  const parseText = textParser(comment.text);
  const commentPostDate = getLocalDateFormat(comment.time);

  return (
    <div>
      <Paper style={{ padding: "20px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="User Avatar" src={""} />
          </Grid>
          <Grid  item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}> {comment.by} </h4>
            <p style={{ textAlign: "left" }}>
            { parseText}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}> { commentPostDate } </p>
            
            {
              comment.kids ? (
              <Grid item>
                <a href="#" onClick={() => handleShowMoreComment(comment.id, comment.kids)}>Show more </a> {comment.kids.length}
              </Grid>
              ) : ''
            }

          </Grid>
        </Grid>        
        
        {
          subComments && subComments ? (subComments) : null
        }

        <Divider variant="fullWidth" style={{ margin: "10px 0" }} />
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


/*   {
    comment.kids ? (<p><a href="#" onClick={handleShowMoreComment}>Show more </a> {comment.kids.length}</p>) : ''
  }
 */

/* 
  {
    comment.kids ? (
     <Paper style={{ border: '1px solid red', padding: "20px 20px" }}>
       <Grid item xs="12">
           <Grid container wrap="nowrap" spacing={2}>
             <h3> Sub comments </h3>
             <p> Text of sub comment here </p>
           </Grid>
       </Grid>
      </Paper>
    ): null 
} */


}

export default CommentItem;

