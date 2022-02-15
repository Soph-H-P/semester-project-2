import styled from 'styled-components';

const PageWrapper = styled.div`
  max-width: 1200px;
  padding: 20px;
  margin: 120px auto 0px auto;
  position: relative;

  @media (max-width: 999px) {
    margin: 82px 0px 0px 0px;
  }
`;

export default PageWrapper;
