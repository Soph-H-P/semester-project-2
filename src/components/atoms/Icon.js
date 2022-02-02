import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  width: 46px;
  height: 46px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`;

const Icon = ({ iconSource, alt }) => {
  return (
    <IconWrapper>
      <img src={iconSource} alt={alt} />
    </IconWrapper>
  );
};

export default Icon;
