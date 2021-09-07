import React from 'react';
import { Box, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import { Route } from 'react-router';
const useStyles = makeStyles(() => ({
  pageNotFound: {
    marginTop: '30px',
    display: 'flex',
    minHeight: '75vh',
    '& .page-404__row': {
      flex: '1 1 100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }
  }
}));


function PageNotFound() {
  const classes = useStyles();
  return(
    <Grid item xs={12} className={classes.pageNotFound}>
      <Box className="page-404__row">
        <Typography variant="h4"> 404 - Page not found </Typography>
        <Route path="/">
          <Link href="/"> Go gome </Link>
        </Route>
      </Box>
    </Grid>
  );
}

export default PageNotFound;

