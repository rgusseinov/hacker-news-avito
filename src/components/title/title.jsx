import React from 'react';

const Title = ({ title, handleRefreshNews }) => {
  return (
    <div className="filter">
      <div className="filter-label">
        <h4>{title}</h4>
      </div>
      <div className="filter-button">
        <button className="button" onClick={handleRefreshNews}>
          Refresh
        </button>
      </div>
    </div>
  );
};

export default Title;
