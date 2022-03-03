import styled from 'styled-components';

const StyledImagePreviewContainer = styled.div`
  height: 250px;
  overflow: hidden;
  display: flex;
  justify-content: center;

  img {
    object-fit: cover;
    height: 100%;
  }
`;

export default StyledImagePreviewContainer;
