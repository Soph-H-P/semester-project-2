import styled from 'styled-components';

const ErrorMessage = styled.p`
  color: ${(props) => props.theme.errorColor};
  text-align: center;
  background: ${(props) => props.theme.white};
  padding: 20px;
  font-size: 21px;
`;

export default ErrorMessage;
