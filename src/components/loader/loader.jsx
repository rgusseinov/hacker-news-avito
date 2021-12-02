import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

const Loader = () => {
  return (
    <Grid item xs={12}>
      <CircularProgress />
    </Grid>
  );
};

export default Loader;
