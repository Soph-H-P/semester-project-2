import React, { useState, useEffect } from 'react';
import HeroSection from '../components/atoms/HeroSection';
import fetchHeroImage from '../utils/fetchHeroImage';
import HeroText from '../components/atoms/HeroText';

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    fetchHeroImage(setBackgroundImage);
  }, []);

  return (
    <div>
      <HeroSection backgroundImage={backgroundImage}>
      <HeroText>Start Making Tracks</HeroText>
      </HeroSection>
    </div>
  );
};

export default Home;
