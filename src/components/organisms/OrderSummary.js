import React from 'react';
import styled from 'styled-components';

import Button from '../atoms/Button';
import SubTitle from '../atoms/SubTitle';
import BagSummaryRow from '../molecules/BagSummaryRow';

const OrderSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px ${(props) => props.theme.black};
  width: 270px;
  padding: 10px;
  align-items: left;

  button {
    align-self: center;
  }
`;

const OrderSummary = ({ numberOfItems }) => {
  return (
    <OrderSummaryWrapper>
      <SubTitle>Order Summary</SubTitle>
      <BagSummaryRow
        title="Subtotal"
        value="£00.00"
        details={`${numberOfItems} items`}
      ></BagSummaryRow>
      <BagSummaryRow title="Shipping" value="£00.00" details="3-5 working days"></BagSummaryRow>
      <BagSummaryRow title="Order Total" value="£00.00" details="VAT inc."></BagSummaryRow>
      <Button>Buy Now</Button>
    </OrderSummaryWrapper>
  );
};

export default OrderSummary;
