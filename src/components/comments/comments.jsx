import { Button, Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import classes from './comments.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { loadComments, updateComments } from '../../store/actions';
import { useDispatch } from 'react-redux';
import CommentList from './comment-list';
import Loader from '../loader/loader';


function Comments(){

  const { id } = useParams();
  const dispatch = useDispatch();
  
  const items = useSelector((state) => state.itemReducer);
  const { loading } = useSelector((state) => state.commentsReducer);
 

  useEffect(() => {
    if (!items[id]) return;
    dispatch(loadComments(id, items[id].kids));
  }, []);

  const handleReloadComments = () => {
    dispatch(updateComments(id));  
  };
  
  return(
    <Grid item xs={12}>
      { loading ? <Loader /> : (
        <Grid container className={classes.boxWrapper}>
          <Grid item xs={10}>
            <Typography variant="h5"> Comments {items[id]?.descendants} </Typography>
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
        </Grid>)   
      }
    </Grid>
  );
}

export default Comments;