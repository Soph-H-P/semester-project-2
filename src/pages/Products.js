import React from 'react';

import Title from '../components/atoms/Title';
import PageWrapper from '../components/atoms/PageWrpper';
import ProductsGrid from '../components/organisms/ProductsGrid';

const Products = ({ userRole }) => {
  return (
    <PageWrapper>
      <Title>All Sneakers</Title>
      <ProductsGrid userRole={userRole} />
    </PageWrapper>
  );
};

export default Products;
