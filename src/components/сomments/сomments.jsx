import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CommentList from '../сomment-list/сomment-list';
import { getItemById } from '../../api/api';
import Loader from '../loader/loader';
import { useSelector } from 'react-redux';
import useComments from './useComments';

const useStyles = makeStyles(() => ({
  mt: {
    marginTop: '20px'
  },
}));


function Comments(){

  // const { id } = useParams();
  const classes = useStyles();
  const { findNewsItem } = useComments();
  const isLoading = false;

  /* const [comments, setComments] = useState([]);
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

  }, []); */

  const handleRefreshComment = () => {
    // fetchComments();
  };

  // const kids =  [28347527, 28348533, 28348705, 28349286, 28346618 ];


  console.log(`commentIds`, findNewsItem);


  return(
    <Grid container>
      {
        findNewsItem.data.kids ? (
          <Box>
            <Grid item xs={3} className={classes.mt}>
              <Typography variant="h6" color="textSecondary"> Comments { }   </Typography>
            </Grid>
    
            <Grid item xs={2} className={classes.mt}>
              <Button variant="contained" color="primary" onClick={handleRefreshComment}> Refresh </Button>
            </Grid>

            {
              isLoading ? <Loader /> : (
                <Grid item xs={12} className={classes.mt}>
                  <CommentList commentIds={findNewsItem.data.kids} />
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
