import styled from 'styled-components';

const SubTitle = styled.h2`
  color: ${(props) => props.theme.primaryColor};
  font-family: ${(props) => props.theme.headingFont};
  text-transform: capitalize;
`;

export default SubTitle;
