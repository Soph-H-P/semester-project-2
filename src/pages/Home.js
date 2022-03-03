import React from 'react';
import HeroSection from '../components/atoms/HeroSection';
import MetaData from '../components/atoms/MetaData';
import HeroText from '../components/atoms/HeroText';
import PageWrapper from '../components/atoms/PageWrpper';
import FeaturedProducts from '../components/organisms/FeaturedProducts';

const Home = ({ userRole, setItemsInFavourites }) => {
  return (
    <PageWrapper>
      <MetaData
        title="Home"
        description="Browse our large selection of sneakers to fit every foot. Order today for speedy delivery and free returns."
      ></MetaData>
      <HeroSection>
        <HeroText>Start Making Tracks</HeroText>
      </HeroSection>
      <FeaturedProducts userRole={userRole} setItemsInFavourites={setItemsInFavourites} />
    </PageWrapper>
  );
};

export default Home;
