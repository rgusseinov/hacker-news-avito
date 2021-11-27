import React from 'react';
import { Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

function Error(){
  return(
    <Grid item xs={12}>
      <Alert severity="error">Something went wrong. Please refresh page</Alert>
    </Grid>
  );
}

export default Error;
