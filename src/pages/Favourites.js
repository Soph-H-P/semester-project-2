import React, { useEffect, useState } from 'react';

import fetchLocalProducts from '../utils/fetchLocalProducts';

import PageWrapper from '../components/atoms/PageWrpper';
import ProductsGrid from '../components/organisms/ProductsGrid';

const Favourites = ({ userRole, itemsInFavourites, setItemsInFavourites }) => {
  const [currentFavourites, setCurrentFavourites] = useState([]);
  
  useEffect(() => {
    fetchLocalProducts(setCurrentFavourites, itemsInFavourites);
  }, [itemsInFavourites]);

  return (
    <PageWrapper>
      <ProductsGrid userRole={userRole} productsToRender={currentFavourites} setItemsInFavourites={setItemsInFavourites}></ProductsGrid>
    </PageWrapper>
  );
};

export default Favourites;
