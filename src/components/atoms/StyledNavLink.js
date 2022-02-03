import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import shoePrintSvg from '../../assets/icons/shoePrintSvg.svg';
import shoePrintActiveSvg from '../../assets/icons/shoePrintActiveSvg.svg';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 16px;
  font-family: ${(props) => props.theme.headingFont};
  font-size: 21px;
  color: ${(props) => props.theme.black};
  background: no-repeat url(${shoePrintSvg}) top center / 85px;

  &:hover {
    background: no-repeat url(${shoePrintActiveSvg}) top center / 85px;
  }
`;

export default StyledNavLink;
