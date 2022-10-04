import React, { useEffect, useState } from 'react';
import MetaData from '../components/atoms/MetaData';
import PageWrapper from '../components/atoms/PageWrpper';
import Title from '../components/atoms/Title';
import ProductsGrid from '../components/organisms/ProductsGrid';
import fetchProducts from '../utils/fetchProducts';
import Breadcrumbs from '../components/atoms/Breadcrumbs';

const Products = ({ userRole, setItemsInFavourites }) => {
  const [productsArray, setProductsArray] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProducts(setProductsArray, setIsError, setIsLoading);
  }, []);

  return (
    <PageWrapper>
      <MetaData
        title="Sneakers"
        description="Browse all our sneakers, you are bound to find something you love! Order today and start making Tracks"
      ></MetaData>
      <Title>All Sneakers</Title>
      <Breadcrumbs product={null} />
      <ProductsGrid
        userRole={userRole}
        productsToRender={productsArray}
        setItemsInFavourites={setItemsInFavourites}
        isError={isError}
        isLoading={isLoading}
      />
    </PageWrapper>
  );
};

export default Products;
