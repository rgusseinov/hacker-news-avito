import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import '../../scss/components/loader.sass';

const Loader = () => {
  return (
    <Grid item xs={12}>
      <CircularProgress
        className="loader"
      />
    </Grid>
  );
};

export default Loader;
