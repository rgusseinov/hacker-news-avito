import { Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';

function Error(){
  return(
    <Grid>
      <Alert severity="error">Something went wrong. Please refresh page</Alert>
    </Grid>
  );
}

export default Error;
