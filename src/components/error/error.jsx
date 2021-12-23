import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/components/error.sass';

const Error = () => {
  return (
    <div className="error">
      <div className="container">
        <h1 className="error-title">
          <span>404</span> <br /> Ooops! Page not found
        </h1>
        <p className="error-text">
          This page does not exist or it is not unavailable
        </p>
        <Link to="/" className="error-link">
          Go back to main page
        </Link>
      </div>
    </div>
  );
};

export default Error;
