import styled from 'styled-components';

const StyledFormContainer = styled.div`
  border: 1px solid ${(props) => props.theme.black};
  width: 100%;
  max-width: ${(props) => (props.width ? props.width + 'px' : '380px')};
  padding: 25px 50px;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.align ? props.align : 'center')};
  align-self: center;

  input[type='submit'] {
    width: 115px;
    font-weight: 300;
    font-size: 18px;
    padding: 0.5rem;
    background: ${(props) => props.theme.primaryColor};
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 20px;

    &:hover {
      background: ${(props) => props.theme.black};
      color: ${(props) => props.theme.primaryColor};
      font-weight: 700;
    }
  }

  form > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

    a:last-child {
      text-align: right;
      font-size: 1.2rem;
    }
    a:last-child::after {
      content: ' >>';
      color: ${(props) => props.theme.primaryColor};
    }
  }

  @media (max-width: 450px) {
    padding: 20px;
  }
`;

export default StyledFormContainer;


