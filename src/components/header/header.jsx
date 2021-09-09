import { AppBar, IconButton } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.css';

function Header(){
  return(
    <header className={classes.header}>
      <AppBar position="static">
        <IconButton edge="start" aria-label="menu">
          <Link to="/"> Hacker News </Link>
        </IconButton>
      </AppBar>
    </header>
  );
}

export default Header;

