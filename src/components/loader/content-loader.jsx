import React from 'react';
import Loader from 'react-loader-spinner';
import '../../scss/components/loader.sass';

const ContentLoader = () => {
  return (
    <div className="content-loader">
      <Loader type="Oval" color="#ed702d" height={55} width={55} />
    </div>
  );
};

export default ContentLoader;
