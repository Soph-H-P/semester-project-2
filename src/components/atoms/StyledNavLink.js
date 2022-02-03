import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import shoePrintSvg from '../../assets/icons/shoePrintSvg.svg';
import shoePrintActiveSvg from '../../assets/icons/shoePrintActiveSvg.svg';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 16px;
  font-family: ${(props) => props.theme.headingFont};
  font-size: 21px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.black};
  background: no-repeat url(${shoePrintSvg}) bottom center / 50px;
  opacity: 0.7;

  &:hover,
  &.active,
  &:focus  {
    background: no-repeat url(${shoePrintActiveSvg}) bottom center / 50px;
    opacity: 1;
  }
`;

export default StyledNavLink;
