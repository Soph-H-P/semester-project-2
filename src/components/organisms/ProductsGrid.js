import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import fetchProducts from '../../utils/fetchProducts';
import ProductCard from '../molecules/ProductCard';
import Loader from '../atoms/Loader';

const ProductGridWrapper = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr 1fr;
  gap: 20px;
  justify-items: center;

  @media (max-width: 1200px) {
    grid-template: 1fr 1fr/ 1fr 1fr 1fr;
  }
  @media (max-width: 950px) {
    grid-template: 1fr/ 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template: 1fr/ 1fr;
  }
`;

const ProductsGrid = ({ userRole }) => {
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    fetchProducts(setProductsArray);
  }, []);

  return (
    <>
      {productsArray.length === 0 && <Loader />}
      <ProductGridWrapper>
        {productsArray.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              isFavourite={false}
              userRole={userRole}
            />
          );
        })}
      </ProductGridWrapper>
    </>
  );
};

export default ProductsGrid;
