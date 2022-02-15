import React, { useState, useEffect } from 'react';

import fetchProducts from '../utils/fetchProducts';

import Title from '../components/atoms/Title';
import PageWrapper from '../components/atoms/PageWrpper';
import ProductsGrid from '../components/organisms/ProductsGrid';

const Products = ({ userRole }) => {
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    fetchProducts(setProductsArray);
  }, []);

  return (
    <PageWrapper>
      <Title>All Sneakers</Title>
      <ProductsGrid userRole={userRole} productsArray={productsArray} gridType={'all'} />
    </PageWrapper>
  );
};

export default Products;
