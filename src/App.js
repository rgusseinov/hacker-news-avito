import { Box, Container } from '@material-ui/core';
import React from 'react';
import Header from './components/header/header';
import './scss/app.sass';

const App = () => {
  return (
    <Box className="wrapper">
      <Header />
      <br/><br/><br/><br/>

      <Container maxWidth="lg">
        <Box className="news-item">
          <div className="news-item__box-rating">
            <div className="rating up">1</div>
          </div>
          <div className="news-item__box-content">
            <h2>PostgreSQL extension for Oracle DBMS_JOB compatibility</h2>
            <div className="news-item__box-footer">
              <ul>
                <li>32 points</li>
                <li>Author</li>
                <li>140 comments</li>
                <li>9 hours ago</li>
              </ul>
            </div>
          </div>          
        </Box>

        <Box className="news-item">
          <div className="news-item__box-rating">
            <div className="rating up">1</div>
          </div>
          <div className="news-item__box-content">
            <h2>PostgreSQL extension for Oracle DBMS_JOB compatibility</h2>
            <div className="news-item__box-footer">
              <ul>
                <li>32 points</li>
                <li>Author</li>
                <li>140 comments</li>
                <li>9 hours ago</li>
              </ul>
            </div>
          </div>          
        </Box>


        <Box className="news-item">
          <div className="news-item__box-rating">
            <div className="rating up">1</div>
          </div>
          <div className="news-item__box-content">
            <h2>PostgreSQL extension for Oracle DBMS_JOB compatibility</h2>
            <div className="news-item__box-footer">
              <ul>
                <li>32 points</li>
                <li>Author</li>
                <li>140 comments</li>
                <li>9 hours ago</li>
              </ul>
            </div>
          </div>          
        </Box>

      </Container>
    </Box>
  );
};

export default App;
