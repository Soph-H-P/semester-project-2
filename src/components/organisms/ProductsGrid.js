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

const ProductsGrid = ({ userRole, productsToRender, setItemsInFavourites, setItemsInBag = null }) => {
  return (
    <>
      {productsToRender.length === 0 && <Loader />}
      <ProductGridWrapper>
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
