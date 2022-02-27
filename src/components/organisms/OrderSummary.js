import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { saveToStorage, getFromStorage, findInList } from '../../utils/storage';
import { bagItemsKey } from '../../settings/settings';
import Button from '../atoms/Button';
import SubTitle from '../atoms/SubTitle';
import BagSummaryRow from '../molecules/BagSummaryRow';
import calculateNumberOfItems from '../../utils/calculateNumberOfItems';

const OrderSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px ${(props) => props.theme.black};
  width: 100%;
  max-width: 350px;
  height: max-content;
  margin: 20px auto;
  padding: 20px;
  align-items: left;
  position: sticky;
  top: 122px;

  button {
    align-self: center;
  }

  @media (max-width: 850px) {
    margin: 20px;
  }
  @media (max-width: 610px) {
    margin: 20px auto;
    position: relative;
    top: 0px;
  }
`;

const OrderSummary = ({ itemsInBag, setItemsInBag, setIsPurchased, currentBagItems }) => {
  const [bagDetails, setBagDetails] = useState(0);

  useEffect(() => {
    currentBagItems.forEach((item) => {
      const quantity = findInList(getFromStorage(bagItemsKey), item.id).quantity;
      const price = item.price * quantity;
      setBagDetails(price * bagDetails);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBagItems]);

  const simulatePurchase = () => {
    setIsPurchased(true);
    saveToStorage(bagItemsKey, []);
    setItemsInBag(getFromStorage(bagItemsKey));
  };

  return (
    <OrderSummaryWrapper>
      <SubTitle>Order Summary</SubTitle>
      <BagSummaryRow
        title="Subtotal"
        value={`£${bagDetails.toFixed(2)}`}
        details={`${calculateNumberOfItems(itemsInBag)} items`}
      ></BagSummaryRow>
      <BagSummaryRow title="Shipping" value="FREE" details="3-5 working days"></BagSummaryRow>
      <BagSummaryRow
        title="Order Total"
        value={`£${bagDetails.toFixed(2)}`}
        details="VAT inc."
      ></BagSummaryRow>
      <Button handleClick={simulatePurchase}>Buy Now</Button>
    </OrderSummaryWrapper>
  );
};

export default OrderSummary;
