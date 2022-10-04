import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MetaData from '../components/atoms/MetaData';
import PageWrapper from '../components/atoms/PageWrpper';
import Title from '../components/atoms/Title';
import OrderSummary from '../components/organisms/OrderSummary';
import ProductsGrid from '../components/organisms/ProductsGrid';
import fetchLocalProducts from '../utils/fetchLocalProducts';

const BagContainer = styled.div`
  display: flex;
  align-items: space-around;

  @media (max-width: 630px) {
    flex-direction: column-reverse;
  }
`;

const Bag = ({ userRole, itemsInBag, setItemsInFavourites, setItemsInBag }) => {
  const [currentBagItems, setCurrentBagItems] = useState([]);
  const [isPurchased, setIsPurchased] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchLocalProducts(setCurrentBagItems, itemsInBag, setIsError);
  }, [itemsInBag]);


  return (
    <PageWrapper>
      <MetaData
        title={`Your bag (${itemsInBag.length} items)`}
        description="Order now for free speedy delivery and free returns your perfect shoes are only a click away."
      ></MetaData>
      {isPurchased && <Title>Congratulations your shoes are on the way!</Title>}
      {itemsInBag.length === 0 && !isPurchased && <Title>Currently no items in your bag</Title>}
      {itemsInBag.length >= 1 && !isPurchased && (
        <>
          {!isError && (
            <Title>
              Your Bag ({currentBagItems.length}
              {itemsInBag.length >= 2 ? ' items' : ' item'})
            </Title>
          )}
          <BagContainer>
            <ProductsGrid
              userRole={userRole}
              productsToRender={currentBagItems}
              setItemsInFavourites={setItemsInFavourites}
              setItemsInBag={setItemsInBag}
              isError={isError}
            ></ProductsGrid>
            <OrderSummary
              currentBagItems={currentBagItems}
              itemsInBag={itemsInBag}
              setItemsInBag={setItemsInBag}
              setIsPurchased={setIsPurchased}
            ></OrderSummary>
          </BagContainer>
        </>
      )}
    </PageWrapper>
  );
};

export default Bag;
