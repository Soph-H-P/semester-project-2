import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.darkFontColor};
  position: relative;
  font-family: ${(props) => props.theme.headingFont};
  text-transform: capitalize;

  &::after {
    content: '';
    width: 40px;
    height: 3px;
    background-color: ${(props) => props.theme.primaryColor};
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

export default Title;
