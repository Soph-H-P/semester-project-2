import React, { useState, useEffect } from 'react';
import MetaData from '../components/atoms/MetaData';
import fetchCurrentProduct from '../utils/fetchCurrentProduct';

import PageWrapper from '../components/atoms/PageWrpper';
import Breadcrumbs from '../components/atoms/Breadcrumbs';
import ProductDetails from '../components/molecules/ProductDetails';

const Product = ({ userRole, setItemsInBag, setItemsInFavourites }) => {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const productId = params.get('id');

  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    fetchCurrentProduct(productId, setCurrentProduct);
  }, [productId]);

  return (
    <PageWrapper>
      <MetaData title={currentProduct.title} description={currentProduct.description}></MetaData>
      <Breadcrumbs product={currentProduct.title}/>
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
