import React, { useEffect, useState } from 'react';

import HeroSection from '../components/atoms/HeroSection';
import HeroText from '../components/atoms/HeroText';
import PageWrapper from '../components/atoms/PageWrpper';
import FeaturedProducts from '../components/organisms/FeaturedProducts';
import fetchHeroImage from '../utils/fetchHeroImage';

const Home = ({ userRole, setItemsInFavourites }) => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    fetchHeroImage(setBackgroundImage);
  }, []);

  return (
    <PageWrapper>
      <HeroSection backgroundImage={backgroundImage}>
        <HeroText>Start Making Tracks</HeroText>
      </HeroSection>
      <FeaturedProducts userRole={userRole} setItemsInFavourites={setItemsInFavourites} />
    </PageWrapper>
  );
};

export default Home;
