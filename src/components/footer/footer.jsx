import { Container, Typography } from '@material-ui/core';
import React from 'react';
import classes from './footer.module.css';

function Footer(){
  return(
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Typography variant="h6"> Hacker news </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Applications are open for YC Winter 2022
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;

