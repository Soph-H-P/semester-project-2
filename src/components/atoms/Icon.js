import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  padding: 1rem;
`;

const Icon = ({ iconSource, alt }) => {
  return (
    <IconWrapper>
      <img src={iconSource} alt={alt} />
    </IconWrapper>
  );
};

export default Icon;
