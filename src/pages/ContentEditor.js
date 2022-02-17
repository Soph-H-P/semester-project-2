import React from 'react';

import PageWrapper from '../components/atoms/PageWrpper';
import EditProduct from '../components/molecules/EditProduct';

const ContentEditor = ({ userRole }) => {

  return (
    <PageWrapper>
      <EditProduct userRole={userRole} />
    </PageWrapper>
  );
};

export default ContentEditor;

