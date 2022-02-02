import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  backgroundimage: ${3};
`;

const HeroSection = (image) => {
  return <StyledDiv backgroundImage={image} />;
};

export default HeroSection;
