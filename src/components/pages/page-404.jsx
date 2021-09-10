import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import classes from './page-404.module.css';

function PageNotFound() {
  return(
    <Grid item xs={12}>
      <Box className={classes.pageNotFoundBox}>
        <Typography variant="h4"> 404 - Page not found </Typography>
        <Link to="/"> Go Home </Link>
      </Box>
    </Grid>
  );
}

export default PageNotFound;

