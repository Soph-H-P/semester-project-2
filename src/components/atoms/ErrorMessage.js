import styled from "styled-components";

const ErrorMessage = styled.p`
  color: ${(props) => props.theme.errorColor};
  text-align: center;
`;

export default ErrorMessage