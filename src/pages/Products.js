import React, { useEffect, useState } from 'react';

import PageWrapper from '../components/atoms/PageWrpper';
import Title from '../components/atoms/Title';
import ProductsGrid from '../components/organisms/ProductsGrid';
import fetchProducts from '../utils/fetchProducts';

const Products = ({ userRole, setItemsInFavourites }) => {
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    fetchProducts(setProductsArray);
  }, []);

  return (
    <PageWrapper>
      <Title>All Sneakers</Title>
      <ProductsGrid
        userRole={userRole}
        productsToRender={productsArray}
        setItemsInFavourites={setItemsInFavourites}
      />
    </PageWrapper>
  );
};

export default Products;
