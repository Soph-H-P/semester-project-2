import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import fetchProducts from '../../utils/fetchProducts';
import Loader from '../atoms/Loader';
import { ErrorMessage } from '../atoms/StyledFormContainer';
import SubTitle from '../atoms/SubTitle';
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
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    fetchProducts(setProductsArray, setIsError, true);
  }, []);

  return (
    <FeaturedProductsdWrapper>
      <Title>Featured Sneakers</Title>
      {productsArray.length === 0 && !isError && <Loader featured={true} />}
      {isError && <ErrorMessage>We seem to be having trouble finding these products at the moment. Sorry for any inconvenience.</ErrorMessage>}
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
