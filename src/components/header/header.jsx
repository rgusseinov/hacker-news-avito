import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Grid, IconButton } from '@material-ui/core';

const Header = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <AppBar position="static">
          <IconButton edge="start" aria-label="menu">
            <Link to="/"> Hacker News </Link>
          </IconButton>
        </AppBar>
      </Grid>
    </Grid>
  );
};

export default Header;
