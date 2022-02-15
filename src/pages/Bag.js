import React, { useState, useEffect } from 'react';

import fetchProducts from '../utils/fetchProducts';
import { getFromStorage, removeFromStorage } from '../utils/storage';
import { bagItemsKey } from '../settings/settings';

import Button from '../components/atoms/Button';
import PageWrapper from '../components/atoms/PageWrpper';
import ProductsGrid from '../components/organisms/ProductsGrid';

const Bag = ({ userRole }) => {
  const [productsArray, setProductsArray] = useState([]);
  const [currentBaggedItems] = useState(getFromStorage(bagItemsKey));

  useEffect(() => {
    fetchProducts(setProductsArray, false, 'bag');
  }, [currentBaggedItems]);

  const handleClearBag = () => {
    removeFromStorage(bagItemsKey);
    fetchProducts(setProductsArray, false, 'bag');
  };

  const removeFromBag = () => {
    
  }

  return (
    <PageWrapper>
      <ProductsGrid userRole={userRole} productsArray={productsArray} gridType={'bag'}  isEmpty={currentBaggedItems.length === 0} removeFromBag={removeFromBag}></ProductsGrid>
      <Button handleClick={handleClearBag}>Empty Bag</Button>
    </PageWrapper>
  );
};

export default Bag;
