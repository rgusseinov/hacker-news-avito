import { Button, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import classes from './comments.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { loadComments, updateComments } from '../../store/actions';
import { useDispatch } from 'react-redux';
import CommentList from './comment-list';


function Comments(){

  const { id } = useParams();
  const dispatch = useDispatch();
  
  const items = useSelector((state) => state.itemReducer);    
  const [commentsCount, setCommentsCount] = useState(0);

  useEffect(() => {
    if (!items[id]) return;
    setCommentsCount(items[id].kids.length);
    dispatch(loadComments(id, items[id].kids));
  });

  const handleReloadComments = () => {
    dispatch(updateComments(id));
    setCommentsCount(items[id].kids.length);
  };
  
  return(
    <Grid item xs={12}>
      {
        commentsCount ? (
          <Grid container className={classes.boxWrapper}>

            <Grid item xs={10}>
              <Typography variant="h5"> Comments {commentsCount} </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<RefreshIcon />}
                onClick={handleReloadComments}
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
                    onClick={() => {}}
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