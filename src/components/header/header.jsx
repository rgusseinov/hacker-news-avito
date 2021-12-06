import React from 'react';
import { AppBar, Box, Container, Link, Toolbar, Typography } from '@material-ui/core';
import Logo from '../../assets/logo.png';
import '../../scss/components/header.sass';

const Header = () => {
  return (
    <header className="header">
      <AppBar title={<img src={Logo} />} className="appBar">
        <Container maxWidth="lg">
            <Toolbar className="toolbar">
              <Box className="logo">
                <img src={Logo} alt="Logo" />
                <Typography className="title"> Hacker News </Typography>
              </Box>
              <nav className="menu">
                <Link variant="button" className="menu-item" href="#"> News </Link>
                <Link variant="button" className="menu-item" href="#"> Pasts </Link>
                <Link variant="button" className="menu-item" href="#"> Comments </Link>
                <Link variant="button" className="menu-item active" href="#"> Log In </Link>            
              </nav>
            </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
