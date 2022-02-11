import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import fetchProducts from '../../utils/fetchProducts';
import Title from '../atoms/Title';
import ProductCard from '../molecules/ProductCard';

const ProductGridWrapper = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

const ProductsGrid = () => {
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    fetchProducts(setProductsArray);
  }, []);

  return (
      <>
    <Title>All Sneakers</Title>  
    <ProductGridWrapper>
      {productsArray.map((product) => {
        return (
          <ProductCard key={product.id} product={product} isFavourite={false} isAdmin={true} />
        );
      })}
    </ProductGridWrapper>
      </>
  );
};

export default ProductsGrid;
