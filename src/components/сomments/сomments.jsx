import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { requestCommentIds } from '../../features/comment/actions';
import CommentList from '../сomment-list/сomment-list';
import useComments from './useComments';

const useStyles = makeStyles(() => ({
  mt: {
    marginTop: '20px'
  },
}));


function Comments(){
  const classes = useStyles();


  const dispatch = useDispatch();
  const { id } = useParams();
  const {commentdIds, isLoaded} = useSelector(({ commentdIds }) => commentdIds);
  // const newsItem = newsItems[id];
  
  useEffect(() => {
    // if (newsItem) return;
    dispatch(requestCommentIds(id));
  }, []);

  console.log(commentdIds);
  
  return(
    <Grid container>
      {
        // eslint-disable-next-line no-constant-condition
        true ? (
          <Box>
            <Grid item xs={3} className={classes.mt}>
              <Typography variant="h6" color="textSecondary"> Comments (#)  </Typography>
            </Grid>
    
            <Grid item xs={2} className={classes.mt}>
              <Button variant="contained" color="primary"> Refresh </Button>
            </Grid>

            {/* Loader was here */}
            <Grid item xs={12} className={classes.mt}>
              <CommentList />
            </Grid>              
            
          </Box>
        ) : (
          <Grid item xs={10} className={classes.mt}>
            <Typography variant="h6" color="textPrimary"> Sorry! For now no comments.  </Typography>
          </Grid>
        )
      }

    </Grid>
  );
}

export default Comments;
