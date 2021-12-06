import { Box } from '@material-ui/core';
import React from 'react';
import Header from './components/header/header';
import './scss/app.sass';

const App = () => {
  return (
    <Box className="wrapper">
      <Header />
    </Box>
  );
};

export default App;
