import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import bagSvg from '../../assets/icons/bagSvg.svg';
import closeSvg from '../../assets/icons/closeSvg.svg';
import editSvg from '../../assets/icons/editSvg.svg';
import loginSvg from '../../assets/icons/loginSvg.svg';
import menuSvg from '../../assets/icons/menuSvg.svg';
import outlineHeartSvg from '../../assets/icons/outlineHeartSvg.svg';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Logo from '../atoms/Logo';
import StyledNavLink from '../atoms/StyledNavLink';
import SearchInput from '../molecules/SearchInput';

const NavContainer = styled.div`
  padding: ${(props) => (props.windowwidth >= 999 ? '20px' : '10px')};
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.windowwidth >= 999 ? 'center' : 'flex-start')};
  position: fixed;
  background: ${(props) => props.theme.white};
  z-index: 100000;
  width: 100%;
  max-height: 100vh;

  a {
    position: relative;
  }

  #bag::after {
    content: '${(props) => props.itemsinbag}';
    position: absolute;
    top: 20px;
    right: 5px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  width: max-content;
`;
const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: ${(props) => props.theme.white};
  right: ${(props) => (props.open ? '0px' : '-1000px')};
  top: 82px;
  transition: right 1s ease;
  z-index: -1;
  min-width: 100%;
  align-items: center;
`;

const NavBar = ({ userRole, handleOpenMenu }) => {
  return (
    <>
      <SearchInput />
      <StyledNavLink
        to="/products"
        className={(navData) => (navData.isActive ? 'active-style' : '')}
        onClick={handleOpenMenu}
      >
        Sneakers
      </StyledNavLink>
      <StyledNavLink
        to="/favourites"
        className={(navData) => (navData.isActive ? 'active-style' : '')}
        aria-label="favourites"
        onClick={handleOpenMenu}
      >
        <Icon iconSource={outlineHeartSvg} alt="favourites" />
      </StyledNavLink>
      <StyledNavLink
        to="/login"
        className={(navData) => (navData.isActive ? 'active-style' : '')}
        aria-label="login"
        onClick={handleOpenMenu}
      >
        <Icon iconSource={loginSvg} alt="log in" />
      </StyledNavLink>
      {userRole === 'Authenticated' && (
        <StyledNavLink
          to="/content-editor"
          className={(navData) => (navData.isActive ? 'active-style' : '')}
          aria-label="content editor"
          onClick={handleOpenMenu}
        >
          <Icon iconSource={editSvg} alt="content editor" />
        </StyledNavLink>
      )}
      <StyledNavLink
        to="/your-bag"
        className={(navData) => (navData.isActive ? 'active-style' : '')}
        aria-label="your bag"
        id="bag"
        onClick={handleOpenMenu}
      >
        <Icon iconSource={bagSvg} alt="your bag" />
      </StyledNavLink>
    </>
  );
};

const Navagation = ({ userRole, itemsInBag }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);
    return () => window.removeEventListener('resize', handleResizeWindow);
  }, []);

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavContainer windowwidth={windowWidth} itemsinbag={itemsInBag.length}>
      <Logo windowwidth={windowWidth} />
      {windowWidth <= 999 && (
        <MobileNav open={menuOpen}>
          <NavBar userRole={userRole} handleOpenMenu={handleOpenMenu} />
        </MobileNav>
      )}
      {windowWidth <= 999 && !menuOpen ? (
        <Button handleClick={handleOpenMenu} type="icon">
          <Icon iconSource={menuSvg} alt="menu" />
        </Button>
      ) : (
        windowWidth <= 999 &&
        menuOpen && (
          <Button handleClick={handleOpenMenu} type="icon">
            <Icon iconSource={closeSvg} alt="menu" />
          </Button>
        )
      )}
      {windowWidth >= 1000 && (
        <DesktopNav>
          <NavBar userRole={userRole} handleOpenMenu={handleOpenMenu} />
        </DesktopNav>
      )}
    </NavContainer>
  );
};

export default Navagation;
