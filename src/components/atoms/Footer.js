import styled from 'styled-components';

const Footer = styled.footer`
  background: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  padding: 14px;
  font-weight: 300;
  text-align: center;
  flex-shrink: 0;
`;

export default Footer;
