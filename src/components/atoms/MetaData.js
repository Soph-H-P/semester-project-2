import React from 'react';
import MetaTags from 'react-meta-tags';

const MetaData = ({ title, description }) => {
  return (
    <MetaTags>
      <title>{title} | Tracks</title>
      <meta id="meta-description" name="description" content={description} />
    </MetaTags>
  );
};

export default MetaData;
