import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';

function Loader(){
  return(
    <Grid>
      <CircularProgress />
    </Grid>
  );
}

export default Loader;
