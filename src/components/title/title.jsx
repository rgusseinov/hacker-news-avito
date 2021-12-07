import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

const Title = ({ title, handleRefreshNews }) => {
  return (
    <div className={""}>
      <Container>
        <Grid item xs={10}>
          <Typography variant="h4">{title}</Typography>
        </Grid>
        <Grid item xs={2}>
          <button 
            className="button"
            onClick={handleRefreshNews}>
              Refresh
          </button>
        </Grid>
      </Container>
    </div>
  );
};

export default Title;
