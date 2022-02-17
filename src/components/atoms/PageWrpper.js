import styled from 'styled-components';

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 120px auto 0px auto;
  padding-top: 20px;
  position: relative;

  & > h1 {
    margin-left: 20px;
  }

  @media (max-width: 999px) {
    margin: 82px 0px 0px 0px;
  }
`;

export default PageWrapper;
