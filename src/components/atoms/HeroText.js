import styled from 'styled-components';

const HeroText = styled.h1`
  font-family: ${(props) => props.theme.headingFont};
  text-align: right;
  font-weight: bold;
  font-size: 64px;
  text-align: right;
  color: ${(props) => props.theme.darkFontColor};
  text-shadow: 0px 0px 20px #fff;
  width: min-content;

  @media (max-width: 800px) {
    font-size: 36px;
  }
`;

export default HeroText;
