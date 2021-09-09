import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CommentList from '../сomment-list/сomment-list';
import useComments from './useComments';

const useStyles = makeStyles(() => ({
  mt: {
    marginTop: '20px'
  },
}));


function Comments(){

  const classes = useStyles();
  const newsItemComment = useComments();
  if (!newsItemComment) return null;
  
  return(
    <Grid container>
      {
        newsItemComment.items ? (
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
