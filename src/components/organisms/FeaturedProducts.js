import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import fetchProducts from '../../utils/fetchProducts';
import Loader from '../atoms/Loader';
import Title from '../atoms/Title';
import ProductCard from '../molecules/ProductCard';

const FeaturedProductsdWrapper = styled.div`
  max-width: 1200px;
  background: ${(props) => props.theme.darkerBackgroundColor};
  margin: 30px auto;
  padding: 20px;
`;
const FeaturedProductsdGrid = styled.div`
  background: ${(props) => props.theme.darkerBackgroundColor};
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr 1fr;
  gap: 20px;
  justify-items: center;

  @media (max-width: 1100px) {
    grid-template: 1fr 1fr/ 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template: 1fr/ 1fr;
  }
`;

const FeaturedProducts = ({ userRole, setItemsInFavourites }) => {
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    fetchProducts(setProductsArray, true);
  }, []);

  return (
    <FeaturedProductsdWrapper>
      {productsArray.length === 0 && <Loader />}
      <Title>Featured Sneakers</Title>
      <FeaturedProductsdGrid>
        {productsArray.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              isFavourite={false}
              userRole={userRole}
              setItemsInFavourites={setItemsInFavourites}
            />
          );
        })}
      </FeaturedProductsdGrid>
    </FeaturedProductsdWrapper>
  );
};

export default FeaturedProducts;
