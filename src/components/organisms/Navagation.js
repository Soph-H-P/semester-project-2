import React from 'react';
import styled from 'styled-components';
import StyledNavLink from '../atoms/StyledNavLink';
import Logo from '../atoms/Logo';
import Icon from '../atoms/Icon';
import outlineHeartSvg from '../../assets/icons/outlineHeartSvg.svg';
import editSvg from '../../assets/icons/editSvg.svg';
import loginSvg from '../../assets/icons/loginSvg.svg';
import bagSvg from '../../assets/icons/bagSvg.svg';

const NavContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    width: max-content;
  }
`;

const Navagation = () => {
  const isAdmin = true;

  return (
    <NavContainer>
      <Logo />
      <nav>
        {isAdmin && (
          <StyledNavLink
            to="/content-editor"
            className={(navData) => (navData.isActive ? 'active-style' : '')}
            aria-label="content editor"
          >
            <Icon iconSource={editSvg} alt="content editor" />
          </StyledNavLink>
        )}
        <StyledNavLink
          to="/products"
          className={(navData) => (navData.isActive ? 'active-style' : '')}
        >
          Sneakers
        </StyledNavLink>
        <StyledNavLink
          to="/favourites"
          className={(navData) => (navData.isActive ? 'active-style' : '')}
          aria-label="favourites"
        >
          <Icon iconSource={outlineHeartSvg} alt="favourites" />
        </StyledNavLink>
        <StyledNavLink
          to="/login"
          className={(navData) => (navData.isActive ? 'active-style' : '')}
          aria-label="login"
        >
          <Icon iconSource={loginSvg} alt="log in" />
        </StyledNavLink>
        <StyledNavLink
          to="/your-bag"
          className={(navData) => (navData.isActive ? 'active-style' : '')}
          aria-label="your bag"
        >
          <Icon iconSource={bagSvg} alt="your bag" />
        </StyledNavLink>
      </nav>
    </NavContainer>
  );
};

export default Navagation;
