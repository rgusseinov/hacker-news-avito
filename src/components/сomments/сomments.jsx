import { Box, Button, Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { requestCommentIds } from '../../features/comment/actions';
import CommentList from '../сomment-list/сomment-list';
import RefreshIcon from '@material-ui/icons/Refresh';
import classes from './comments.module.css';


function Comments(){
  const dispatch = useDispatch();
  const { id } = useParams();
  const {commentIds, isLoaded } = useSelector(({ commentIds }) => commentIds);
  const comments = commentIds[id];
    
  useEffect(() => {
    if (comments) return;
    dispatch(requestCommentIds(id));
  }, []);

  
  return(
    <div>
      {
        isLoaded ? (
          <Grid container>
            <Box className={classes.boxWrapper} display="flex" justifyContent="space-beetween">
              <Grid item xs={8}>
                <Typography variant="h6" color="textSecondary"> Comments   </Typography>
              </Grid>
      
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<RefreshIcon />}
                > Refresh </Button>
              </Grid>
            </Box>
          
            <Grid item xs={12}>
              <CommentList />
            </Grid>
            
          </Grid>
        ) : (
          <Grid item xs={10}>
            <Typography variant="h6" color="textPrimary"> Sorry! For now no comments.  </Typography>
          </Grid>
        )
      }
    </div>
  );
}

export default Comments;
