import React from 'react';
import MetaData from '../components/atoms/MetaData';
import PageWrapper from '../components/atoms/PageWrpper';
import EditProduct from '../components/molecules/EditProduct';

const ContentEditor = ({ userRole }) => {
  return (
    <PageWrapper>
      <MetaData
        title="Content Editor"
        description="As an admin you have access to create new, edit existing and also delete products here."
      ></MetaData>
      <EditProduct userRole={userRole} />
    </PageWrapper>
  );
};

export default ContentEditor;
