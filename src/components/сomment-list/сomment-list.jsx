import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadCommentByItemId } from '../../features/items/actions';
import CommentItem from '../сomment-item/сomment-item';

const useStyles = makeStyles(() => ({
  mt: {
    marginTop: '20px'
  },
}));

function CommentList(){
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCommentByItemId(id));
  }, []);

  console.log(`id`, id);
 
  const { comments } = useSelector(({ comments }) => comments);
  return (
    <div>

      <Grid container spacing={3}>
        <Grid item xs={10} className={classes.mt}>
          <Typography variant="h6"> Comments  </Typography>
        </Grid>
        <Grid item xs={2} className={classes.mt}>
          <Button variant="contained" color="primary"> Refresh </Button>
        </Grid>
      </Grid>


      { comments.kids && comments.kids.map((commentId, key) => {
        return (<CommentItem
          key={key}
          commentId={commentId}
          />);
        })
      }
    </div>
  );
  
}

export default CommentList;

