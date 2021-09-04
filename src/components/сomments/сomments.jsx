import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CommentList from '../сomment-list/сomment-list';
import { getItemById } from '../../api/api';
import Loader from '../loader/loader';

const useStyles = makeStyles(() => ({
  mt: {
    marginTop: '20px'
  },
}));


function Comments(){

  const { id } = useParams();
  const classes = useStyles();
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);

  const fetchComments = useCallback(() => {
    setCommentsLoading(true);
    const requestComments = async () => {
      const data = await getItemById(id);
      setComments(data);
    };
    setCommentsLoading(false);
    requestComments();
  });
  
  useEffect(() => {
    fetchComments();    

  }, []);

  const handleRefreshComment = () => {
    fetchComments();
  };
  
  return(
    <Grid container>
      {
        comments.kids ? (
          <Box>
            <Grid item xs={3} className={classes.mt}>
              <Typography variant="h6" color="textSecondary"> Comments { comments.descendants ? comments.descendants : 1 }   </Typography>
            </Grid>
    
            <Grid item xs={2} className={classes.mt}>
              <Button variant="contained" color="primary" onClick={handleRefreshComment}> Refresh </Button>
            </Grid>

            {
              commentsLoading ? <Loader /> : (
                <Grid item xs={12} className={classes.mt}>
                  <CommentList comments={comments} />
                </Grid>
              )
            }
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
