import React, { useState, useEffect } from 'react';

import fetchProducts from '../utils/fetchProducts';
import { getFromStorage, removeFromStorage } from '../utils/storage';
import { favouritesKey } from '../settings/settings';

import Button from '../components/atoms/Button';
import PageWrapper from '../components/atoms/PageWrpper';
import ProductsGrid from '../components/organisms/ProductsGrid';

const Favourites = ({ userRole }) => {
  const [productsArray, setProductsArray] = useState([]);

  const handleClearFavourites = () => {
    removeFromStorage(favouritesKey);
    fetchProducts(setProductsArray, false, 'fav');
  };

  useEffect(() => {
    fetchProducts(setProductsArray, false, 'fav');
  }, []);


  return (
    <PageWrapper>
      {productsArray.length !== 0 ? (
        <>
          <ProductsGrid
            userRole={userRole}
            productsArray={productsArray}
            gridType={'fav'}
            isEmpty={productsArray.length === 0}
          ></ProductsGrid>
          <Button handleClick={handleClearFavourites}>Clear Favourites</Button>
        </>
      ) : (
        <p>You don't currently have any favourites</p>
      )}
    </PageWrapper>
  );
};

export default Favourites;
