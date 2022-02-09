import styled from 'styled-components';

const StyledFormContainer = styled.div`
  border: 1px solid ${(props) => props.theme.black};
  max-width: ${(props) => props.width ? props.width + 'px' : '380px'};
  padding: 25px 50px;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align ? props.align : 'center'};

  input[type='submit'] {
    width: 100px;
    font-weight: 300;
    font-size: 18px;
    padding: 0.5rem;
    background: ${(props) => props.theme.primaryColor};
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${(props) => props.theme.black};
      color: ${(props) => props.theme.primaryColor};
      font-weight: 700;
    }
  }
`;

export default StyledFormContainer;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.primaryColor};
`;
