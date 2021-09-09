import { AppBar, Container, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  return(
    <header>
      <AppBar position="static">            
        <IconButton edge="start" color="primary" aria-label="menu"> 
          <Link to="/"> Hacker News </Link>
        </IconButton>            
      </AppBar>
    </header>
  );
}

export default Header;

