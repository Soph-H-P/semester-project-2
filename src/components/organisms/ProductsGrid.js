import React from 'react';
import styled from 'styled-components';

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

const ProductsGrid = ({ userRole, productsArray, gridType, isEmpty = false, removeFromBag }) => {
  return (
    <>
      {productsArray.length === 0 && !isEmpty && <Loader />}
      {(gridType === 'bag' || gridType === 'fav') && isEmpty && <p>{gridType === 'bag' ? 'Currently no items in your bag' : 'You have no favourites yet'}</p>}
      <ProductGridWrapper>
        {productsArray.map((product) => {
          return <ProductCard key={product.id} product={product} userRole={userRole} type="bag" removeFromBag={removeFromBag}/>;
        })}
      </ProductGridWrapper>
    </>
  );
};

export default ProductsGrid;
