import { CircularProgress, makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
/*   root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  } */
}));


function Loader(){
  // const classes = useStyles();
  return(
    <CircularProgress />
  );
}

export default Loader;

