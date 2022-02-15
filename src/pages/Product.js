import React, { useState, useEffect } from 'react';

import fetchCurrentProduct from '../utils/fetchCurrentProduct';

import PageWrapper from '../components/atoms/PageWrpper';
import ProductDetails from '../components/molecules/ProductDetails';
import FeaturedProducts from '../components/organisms/FeaturedProducts';

const Product = ({ userRole, setItemsInBag }) => {
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
      ></ProductDetails>
      <FeaturedProducts userRole={userRole} />
    </PageWrapper>
  );
};

export default Product;
