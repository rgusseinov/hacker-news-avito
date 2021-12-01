import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import classes from './title.module.css';

const Title = ({ title, handleRefreshNews }) => {
  return (
    <div className={classes.title}>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <Typography variant="h4">{title}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<RefreshIcon />}
            onClick={handleRefreshNews}
          >
            {' '}
            Refresh{' '}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Title;
