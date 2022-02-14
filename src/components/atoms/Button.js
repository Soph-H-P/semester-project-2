import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  width: 115px;
  font-weight: 300;
  font-size: 18px;
  padding: 0.5rem;
  background: ${(props) => props.theme.primaryColor};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

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
  ${(props) =>
    props.type === 'icon' &&
    css`
      background: none;
      color: ${props.theme.black};
      border: none;
      width: fit-content;

      &:hover {
        background: none;
        border: none;
        transform: scale(1.1);
      }
    `}
`;

const Button = ({ type, handleClick, dataId = '', children }) => {
  return (
    <StyledButton onClick={(e) => handleClick(e)} type={type} data-id={dataId}>
      {children}
    </StyledButton>
  );
};

export default Button;
