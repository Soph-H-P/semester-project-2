import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import fetchProducts from '../../utils/fetchProducts';
import Loader from '../atoms/Loader';
import ErrorMessage from '../atoms/ErrorMessage';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Title from '../atoms/Title';
import ProductCard from '../molecules/ProductCard';
import leftSvg from '../../assets/icons/leftSvg.svg';
import rightSvg from '../../assets/icons/rightSvg.svg';

const FeaturedProductsdWrapper = styled.div`
  max-width: 1200px;
  background: ${(props) => props.theme.darkerBackgroundColor};
  margin: 30px auto;
  padding: 20px;

  @media (max-width: 400px) {
    padding: 5px;
  }
`;
const FeaturedProductsdGrid = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 3fr 0.2fr;
  grid-template-areas: 'left-arrow posts right-arrow';
  align-items: center;

  @media (max-width: 400px) {
    #right-arrow,
    #left-arrow {
      height: 30px;
      width: 30px;
      padding: 0px;
    }
  }
`;

const SlidingArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: column;
  overflow: hidden;
  scroll-behavior: smooth;
  padding-bottom: 20px;
  margin-bottom: -20px;
  gap: 8px;
`;

const FeaturedProducts = ({ userRole, setItemsInFavourites }) => {
  const [productsArray, setProductsArray] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    fetchProducts(setProductsArray, setIsError, setIsLoading, true);
  }, []);

  const getScrollDistance = () => {
    const productCardWidth = 257;
    const scrollAmount = ref.current.offsetWidth % productCardWidth;
    if (ref.current.offsetWidth - scrollAmount <= 0) {
      return productCardWidth;
    }
    return ref.current.offsetWidth - scrollAmount;
  };

  const scrollTo = (direction) => {
    const scrollDistance = getScrollDistance();
    direction === 'left'
      ? (ref.current.scrollLeft -= scrollDistance)
      : (ref.current.scrollLeft += scrollDistance);
  };

  const handleLeftClick = () => {
    scrollTo('left');
  };

  const handleRightClick = () => {
    scrollTo('right');
  };

  return (
    <FeaturedProductsdWrapper>
      <Title>Featured Sneakers</Title>
      {isLoading && <Loader featured={true} />}
      {isError && (
        <ErrorMessage>
          We seem to be having trouble finding these products at the moment. Sorry for any
          inconvenience.
        </ErrorMessage>
      )}
      <FeaturedProductsdGrid>
        <Button id="left-arrow" handleClick={handleLeftClick} icon={true}>
          <Icon iconSource={leftSvg} alt="scroll left" />
        </Button>
        <SlidingArea ref={ref}>
          {productsArray.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product.attributes}
                isFavourite={false}
                userRole={userRole}
                setItemsInFavourites={setItemsInFavourites}
                productId={product.id}
              />
            );
          })}
        </SlidingArea>
        <Button id="right-arrow" handleClick={handleRightClick} icon={true}>
          <Icon iconSource={rightSvg} alt="scroll right" />
        </Button>
      </FeaturedProductsdGrid>
    </FeaturedProductsdWrapper>
  );
};

export default FeaturedProducts;
