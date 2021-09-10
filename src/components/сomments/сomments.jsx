import { Button, Grid, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { requestCommentIds } from '../../features/comment/actions';
import CommentList from '../сomment-list/сomment-list';
import RefreshIcon from '@material-ui/icons/Refresh';
import classes from './comments.module.css';


function Comments(){
  const dispatch = useDispatch();
  const { id } = useParams();

  const { commentIds } = useSelector(({ commentIds }) => commentIds);
  const { newsItems } = useSelector(({ newsItems }) => newsItems);
  
  const [triggerUpdate, setTriggerUpdate] = useState(false);

  const comments = commentIds[id];
  const currentNewsItem = newsItems[id];
    
  useEffect(() => {
    if (comments) return;
    dispatch(requestCommentIds(id));

  }, [triggerUpdate]);
  
  const handleRefreshComments = () => {
    setTriggerUpdate(!triggerUpdate);
  };

  let commentCount = 0;
  if (currentNewsItem?.item){
    commentCount = currentNewsItem.item.descendants;
  }

  return(
    <Grid item xs={12}>
      {
        commentCount ? (
          <Grid container className={classes.boxWrapper}>

            <Grid item xs={10}>
              <Typography variant="h5"> Comments {commentCount} </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<RefreshIcon />}
                onClick={handleRefreshComments}
              > Refresh </Button>
            </Grid>
          
            <Grid item xs={12}>
              <CommentList />
            </Grid>
            
          </Grid>
        ) : (
          <Grid container className={classes.boxWrapper}>
            <Grid item xs={12}>
              <Grid container spacing={3} className={classes.header}>
                <Grid item xs={10}>
                  <Typography variant="h5"> Sorry! No comments posted so far. </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<RefreshIcon />}
                    onClick={handleRefreshComments}
                  > Refresh </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )
      }
    </Grid>
  );
}

export default Comments;
