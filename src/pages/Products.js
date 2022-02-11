import React from 'react';

import PageWrapper from '../components/atoms/PageWrpper';
import ProductsGrid from '../components/organisms/ProductsGrid';

const Products = ({userRole}) => {
  return <PageWrapper>
    <ProductsGrid userRole={userRole}/>
  </PageWrapper>;
};

export default Products;
