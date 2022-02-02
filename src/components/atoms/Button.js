import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  width: 100px;
  font-weight: 300;
  font-size: 18px;
  padding: 0.5rem;
  background: ${(props) => props.theme.primaryColor};
  border: none;

  &:hover {
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme.primaryColor};
    font-weight: 700;
  }

  ${(props) =>
    props.type === 'secondary' &&
    css`
      background: ${props.theme.white};
      color: ${props.theme.black};
      border: ${props.theme.black} solid 1px;

      &:hover {
        background: ${(props) => props.theme.white};
        color: ${(props) => props.theme.primaryColor};
        border: ${props.theme.black} solid 3px;
      }
    `}
`;

const Button = ({ type, handleClick, children }) => {
  return (
    <StyledButton onClick={() => handleClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
