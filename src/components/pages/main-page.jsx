import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import NewsList from '../news-list/news-list';
import classes from './main-page.module.css';
import RefreshIcon from '@material-ui/icons/Refresh';

function Main({ handleRefreshStories }) {

  return(
    <div>
      <Grid item xs={12}>
        <Grid container spacing={3} className={classes.header}>
          <Grid item xs={10}>
            <Typography variant="h4"> Lastest News </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<RefreshIcon />}
              onClick={handleRefreshStories}
            > Refresh </Button>
          </Grid>
        </Grid>
      </Grid>
      <NewsList />
    </div>
  );
}

export default Main;

