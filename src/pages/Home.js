import React, { useState, useEffect } from 'react';
import HeroSection from '../components/atoms/HeroSection';
import fetchHeroImage from '../utils/fetchHeroImage';

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    fetchHeroImage(setBackgroundImage);
  }, []);

  return (
    <div>
      <HeroSection backgroundImage={backgroundImage}></HeroSection>
    </div>
  );
};

export default Home;
