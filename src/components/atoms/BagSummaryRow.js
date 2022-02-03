import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  margin: 10px;

  h3 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;
  }

  p,
  span {
    font-weight: 300;
  }

  hr {
    width: 80%;
    border: 1px solid ${(props) => props.theme.lightBackgroundColor};
  }
`;

const BagSummaryRow = ({ title, value, details }) => {
  return (
    <FlexContainer>
      <h3>
        {title}:<span> {value}</span>
      </h3>
      <p>{details}</p>
      <hr />
    </FlexContainer>
  );
};

export default BagSummaryRow;
