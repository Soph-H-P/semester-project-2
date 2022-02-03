import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoBackgroundSvg from '../../assets/icons/logoBackgroundSvg.svg';

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 16px;
  font-family: ${(props) => props.theme.headingFont};
  font-size: 42px;
  color: ${(props) => props.theme.black};
  background: no-repeat url(${logoBackgroundSvg}) center center / cover;
`;

const Logo = () => {
  return <StyledLink to="/" >Tracks</StyledLink>;
};

export default Logo;
