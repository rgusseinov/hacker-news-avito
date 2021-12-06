import { Box } from '@material-ui/core';
import React from 'react';
import Header from './components/header/header';
import './scss/app.sass';

const App = () => {
  return (
    <Box className="wrapper">
      <Header />

      <Box>
        <div className="box-rating">1.</div>
        <div className="box-content">
          <h2>PostgreSQL extension for Oracle DBMS_JOB compatibility</h2>
          <div className="box-footer">
            <ul>
              <li>32 points</li>
              <li>Author</li>
              <li>140 comments</li>
              <li>9 hours ago</li>
            </ul>
          </div>
        </div>
        <div className="box-action">
          <p>Link</p>
        </div>
      </Box>
    </Box>
  );
};

export default App;
