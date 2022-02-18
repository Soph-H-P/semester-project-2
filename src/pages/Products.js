import React, { useEffect, useState } from 'react';

import PageWrapper from '../components/atoms/PageWrpper';
import Title from '../components/atoms/Title';
import ProductsGrid from '../components/organisms/ProductsGrid';
import fetchProducts from '../utils/fetchProducts';

const Products = ({ userRole, setItemsInFavourites }) => {
  const [productsArray, setProductsArray] = useState([]);
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    fetchProducts(setProductsArray, setIsError);
  }, []);

  return (
    <PageWrapper>
      <Title>All Sneakers</Title>
      <ProductsGrid
        userRole={userRole}
        productsToRender={productsArray}
        setItemsInFavourites={setItemsInFavourites}
        isError={isError}
      />
    </PageWrapper>
  );
};

export default Products;
