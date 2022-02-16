import React, { useEffect, useState } from 'react';

import fetchProducts from '../utils/fetchProducts';

import Title from '../components/atoms/Title';
import PageWrapper from '../components/atoms/PageWrpper';
import ProductsGrid from '../components/organisms/ProductsGrid';

const Products = ({ userRole, setItemsInFavourites}) => {
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    fetchProducts(setProductsArray);
  }, []);

  return (
    <PageWrapper>
      <Title>All Sneakers</Title>
      <ProductsGrid userRole={userRole} productsToRender={productsArray} setItemsInFavourites={setItemsInFavourites}/>
    </PageWrapper>
  );
};

export default Products;
