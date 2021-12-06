import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Logo from '../../assets/logo.png';
import '../../scss/components/header.sass';

const Header = () => {
  return (
    <header className="header">
      <AppBar>
        <Toolbar>
          <img src={Logo} alt="Logo" />
          <Typography className="logoContainer"> Hacker News </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
