import React from 'react';
import styled from 'styled-components';

import { saveToStorage, getFromStorage } from '../../utils/storage';
import { bagItemsKey } from '../../settings/settings';
import Button from '../atoms/Button';
import SubTitle from '../atoms/SubTitle';
import BagSummaryRow from '../molecules/BagSummaryRow';

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

const OrderSummary = ({ itemsInBag, setItemsInBag, setIsPurchased }) => {
  const findBagDetails = () => {
    let totalPrice = 0;
    itemsInBag.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };

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
        value={`£${findBagDetails()}`}
        details={`${itemsInBag.length} items`}
      ></BagSummaryRow>
      <BagSummaryRow title="Shipping" value="FREE" details="3-5 working days"></BagSummaryRow>
      <BagSummaryRow
        title="Order Total"
        value={`£${findBagDetails()}`}
        details="VAT inc."
      ></BagSummaryRow>
      <Button handleClick={simulatePurchase}>Buy Now</Button>
    </OrderSummaryWrapper>
  );
};

export default OrderSummary;
