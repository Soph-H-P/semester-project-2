import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';

const NavContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    width: max-content;
  }
`;

const Navagation = ({ children }) => {
  return (
    <NavContainer>
      <nav>{children}</nav>
      <Logo />
    </NavContainer>
  );
};

export default Navagation;
