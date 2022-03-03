import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fetchHeroImage from '../../utils/fetchHeroImage';

const StyledDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 550px;
  margin: 0 auto;
  background: no-repeat url('${(props) => props.backgroundImage}') center center / cover;
  display: flex;
  justify-content: right;
  padding: 20px;

  @media (max-width: 800px) {
    height: 400px;
  }

  @media (max-width: 400px) {
    height: 250px;
  }
`;

const HeroSection = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    fetchHeroImage(setBackgroundImage);
  }, []);

  return <StyledDiv backgroundImage={backgroundImage}>{children}</StyledDiv>;
};

export default HeroSection;
