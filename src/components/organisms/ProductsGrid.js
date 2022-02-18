import styled, { css } from 'styled-components';

import Loader from '../atoms/Loader';
import ErrorMessage from '../atoms/ErrorMessage';
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
  isError,
  setItemsInBag = null,
}) => {
  return (
    <>
      {productsToRender.length === 0 && !isError && <Loader />}
      {isError && !setItemsInBag && (
        <ErrorMessage>
          We seem to be having trouble finding these products at the moment. Sorry for any
          inconvenience.
        </ErrorMessage>
      )}
      {isError && setItemsInBag && (
        <ErrorMessage>
          We seem to have misplaced your bag, we are trying to find it as quickly as possible,
          please try again later. Sorry for any inconvenience.
        </ErrorMessage>
      )}
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
