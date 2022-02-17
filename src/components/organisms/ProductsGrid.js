import styled, { css } from 'styled-components';

import Loader from '../atoms/Loader';
import ProductCard from '../molecules/ProductCard';

const ProductGridWrapper = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  justify-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  ${(props) =>
    props.isbag &&
    css`
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    `}
`;

const ProductsGrid = ({
  userRole,
  productsToRender,
  setItemsInFavourites,
  setItemsInBag = null,
}) => {
  return (
    <>
      {productsToRender.length === 0 && <Loader />}
      <ProductGridWrapper isbag={setItemsInBag ? true : false}>
        {productsToRender.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              userRole={userRole}
              setItemsInFavourites={setItemsInFavourites}
              setItemsInBag={setItemsInBag}
            />
          );
        })}
      </ProductGridWrapper>
    </>
  );
};

export default ProductsGrid;
