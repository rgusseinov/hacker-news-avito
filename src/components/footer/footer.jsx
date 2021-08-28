import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    textAlign: 'center'    
  }
}));

function Footer(){
  const classes = useStyles();

  return(
    <footer className={classes.footer}>
    <Container maxWidth="md" position="sticky">
      <Typography variant="h6" align="center" gutterBottom>
        Hacker news
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Applications are open for YC Winter 2022
      </Typography>
    </Container>
  </footer>
  );
}

export default Footer;

