import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import PageWrapper from '../components/atoms/PageWrpper';
import Title from '../components/atoms/Title';
import ProductsGrid from '../components/organisms/ProductsGrid';
import fetchProducts from '../utils/fetchProducts';

const SearchResults = ({ userRole, setItemsInFavourites }) => {
  const [productsArray, setProductsArray] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isError, setIsError] = useState(false);
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const userSearch = params.get('search');
  const { search } = useLocation();

  useEffect(() => {
    fetchProducts(setProductsArray, setIsError);
  }, [userSearch]);

  useEffect(() => {
    const foundSearchResults = productsArray.filter(
      (product) =>
        product.title.toLowerCase().includes(userSearch.toLowerCase()) ||
        product.description.toLowerCase().includes(userSearch.toLowerCase())
    );
    setSearchResults(foundSearchResults);
  }, [productsArray, userSearch, search]);

  return (
    <PageWrapper>
      <Title>Search Results for: "{userSearch}"</Title>
      <ProductsGrid
        userRole={userRole}
        productsToRender={searchResults}
        setItemsInFavourites={setItemsInFavourites}
        isError={isError}
      />
    </PageWrapper>
  );
};

export default SearchResults;
