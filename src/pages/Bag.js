import React, { useEffect, useState } from 'react';

import PageWrapper from '../components/atoms/PageWrpper';
import ProductsGrid from '../components/organisms/ProductsGrid';
import fetchLocalProducts from '../utils/fetchLocalProducts';

const Bag = ({ userRole, itemsInBag, setItemsInFavourites, setItemsInBag }) => {
  const [currentBagItems, setCurrentBagItems] = useState([]);

  useEffect(() => {
    fetchLocalProducts(setCurrentBagItems, itemsInBag);
  }, [itemsInBag]);

  return (
    <PageWrapper>
      <ProductsGrid
        userRole={userRole}
        productsToRender={currentBagItems}
        setItemsInFavourites={setItemsInFavourites}
        setItemsInBag={setItemsInBag}
      ></ProductsGrid>
    </PageWrapper>
  );
};

export default Bag;
