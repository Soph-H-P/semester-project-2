import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import PageWrapper from '../components/atoms/PageWrpper';
import Title from '../components/atoms/Title';
import ProductsGrid from '../components/organisms/ProductsGrid';
import fetchProducts from '../utils/fetchProducts';
import MetaData from '../components/atoms/MetaData';

const SearchResults = ({ userRole, setItemsInFavourites }) => {
  const [productsArray, setProductsArray] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const userSearch = params.get('search');
  const { search } = useLocation();

  useEffect(() => {
    fetchProducts(setProductsArray, setIsError, setIsLoading);
  }, [userSearch]);

  useEffect(() => {
    const foundSearchResults = productsArray.filter(
      (product) =>
        product.attributes.title.toLowerCase().includes(userSearch.toLowerCase()) ||
        product.attributes.description.toLowerCase().includes(userSearch.toLowerCase())
    );
    setSearchResults(foundSearchResults);
  }, [productsArray, userSearch, search]);

  return (
    <PageWrapper>
      <MetaData
        title={`Searched "${userSearch}"`}
        description={`Currently viewing search results for "${userSearch}", hope you find what you were looking for.`}
      ></MetaData>
      {searchResults.length === 0 && !isError && (
        <Title>Sorry no products were found that match: "{userSearch}"</Title>
      )}
      {searchResults.length > 0 && !isError && (
        <>
          <Title>Search Results for: "{userSearch}"</Title>
          <ProductsGrid
            userRole={userRole}
            productsToRender={searchResults}
            setItemsInFavourites={setItemsInFavourites}
            isError={isError}
            isLoading={isLoading}
          />
        </>
      )}
    </PageWrapper>
  );
};

export default SearchResults;
