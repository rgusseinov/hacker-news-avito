import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, 
  Grid, 
  IconButton } from '@material-ui/core';
import classes from './header.module.css';

function Header(){
  return (
    <Grid container>
      <Grid item xs={12}>
        <header className={classes.header}>
          <AppBar position="static">
            <IconButton edge="start" aria-label="menu">
              <Link to="/"> Hacker News </Link>
            </IconButton>
          </AppBar>
        </header>
      </Grid>
    </Grid>
  );
}

export default Header;

