import React, { useState, useEffect } from 'react';
import HeroSection from '../components/atoms/HeroSection';
import fetchHeroImage from '../utils/fetchHeroImage';
import HeroText from '../components/atoms/HeroText';
import Icon from '../components/atoms/Icon';
import filledHeart from '../assets/icons/filledHeartSvg.svg';
import Title from '../components/atoms/Title';
import SubTitle from '../components/atoms/SubTitle';

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
      <Icon iconSource={filledHeart} alt={'heart'}></Icon>
      <Title>H1 Title</Title>
      <SubTitle>H2 Title</SubTitle>
    </div>
  );
};

export default Home;
