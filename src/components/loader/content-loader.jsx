import React from 'react';
import Loader from 'react-loader-spinner';

const ContentLoader = () => {
  return (
    <div className="content-loader">
      <Loader type="Oval" color="#ed702d" height={40} width={40} />
    </div>
  );
};

export default ContentLoader;
