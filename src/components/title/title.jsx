import { Container } from '@material-ui/core';
import React from 'react';

const Title = ({ title, handleRefreshNews }) => {
  return (
    <div className="title-block">
      <Container maxWidth="lg" className="container">
        <div className="title">
          <h4>{title}</h4>
        </div>
        <div className="actions">
          <button 
            className="button"
            onClick={handleRefreshNews}>
              Refresh
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Title;
