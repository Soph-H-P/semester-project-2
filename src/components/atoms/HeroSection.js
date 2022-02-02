import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 550px;
  margin: 0 auto;
  background: url('${(props) => props.backgroundImage}') center center;
  background-size: cover;

  @media (max-width: 800px) {
    height: 400px;
  }

  @media (max-width: 400px) {
    height: 250px;
  }
`;

const HeroSection = ({ backgroundImage }) => {
  return <StyledDiv backgroundImage={backgroundImage} />;
};

export default HeroSection;
