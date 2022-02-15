import React, { useState, useEffect } from 'react';
import HeroSection from '../components/atoms/HeroSection';
import fetchHeroImage from '../utils/fetchHeroImage';
import HeroText from '../components/atoms/HeroText';
import PageWrapper from '../components/atoms/PageWrpper';
import FeaturedProducts from '../components/organisms/FeaturedProducts';

const Home = ({ userRole }) => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    fetchHeroImage(setBackgroundImage);
  }, []);

  return (
    <PageWrapper>
      <HeroSection backgroundImage={backgroundImage}>
        <HeroText>Start Making Tracks</HeroText>
      </HeroSection>
      <FeaturedProducts userRole={userRole} />
    </PageWrapper>
  );
};

export default Home;
