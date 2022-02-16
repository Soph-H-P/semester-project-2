import React, { useEffect, useState } from 'react';

import PageWrapper from '../components/atoms/PageWrpper';
import ProductDetails from '../components/molecules/ProductDetails';
import fetchCurrentProduct from '../utils/fetchCurrentProduct';

const Product = ({ userRole, setItemsInBag, setItemsInFavourites }) => {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const productId = params.get('id');

  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    fetchCurrentProduct(productId, setCurrentProduct);
    document.querySelector('title').innerHTML = currentProduct.title + ' | Tracks';
  }, [productId, currentProduct.title]);

  return (
    <PageWrapper>
      <ProductDetails
        userRole={userRole}
        product={currentProduct}
        setItemsInBag={setItemsInBag}
        setItemsInFavourites={setItemsInFavourites}
      ></ProductDetails>
    </PageWrapper>
  );
};

export default Product;
