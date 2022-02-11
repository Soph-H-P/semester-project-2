import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StyledNavLink from '../atoms/StyledNavLink';
import Logo from '../atoms/Logo';
import Icon from '../atoms/Icon';
import outlineHeartSvg from '../../assets/icons/outlineHeartSvg.svg';
import menuSvg from '../../assets/icons/menuSvg.svg';
import closeSvg from '../../assets/icons/closeSvg.svg';
import editSvg from '../../assets/icons/editSvg.svg';
import loginSvg from '../../assets/icons/loginSvg.svg';
import bagSvg from '../../assets/icons/bagSvg.svg';
import SearchInput from '../molecules/SearchInput';
import Button from '../atoms/Button';

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

const NavBar = ({ userRole }) => {
  return (
    <>
    <SearchInput />
      {userRole === 'Authenticated' && (
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
    </>
  );
};

const Navagation = ({ userRole, signedIn }) => {
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
    <NavContainer windowwidth={windowWidth}>
      <Logo windowwidth={windowWidth} />
      {windowWidth <= 999 && (
        <MobileNav open={menuOpen}>
          <NavBar userRole={userRole} />

        </MobileNav>
      )}
      {windowWidth <= 999 && !menuOpen ? (
        <Button handleClick={handleOpenMenu} type="icon">
          <Icon iconSource={menuSvg} alt="menu" />
        </Button>
      ) : windowWidth <= 999 && menuOpen && (
        <Button handleClick={handleOpenMenu} type="icon">
          <Icon iconSource={closeSvg} alt="menu" />
        </Button>
      )}
      {windowWidth >= 1000 && (
          <DesktopNav>
            <NavBar userRole={userRole} />
          </DesktopNav>
      )}
    </NavContainer>
  );
};

export default Navagation;
