import React, { useState, useEffect } from 'react';
import HeroSection from '../components/atoms/HeroSection';
import fetchHeroImage from '../utils/fetchHeroImage';
import HeroText from '../components/atoms/HeroText';
import Icon from '../components/atoms/Icon';
import filledHeart from '../assets/icons/filledHeartSvg.svg';
import Title from '../components/atoms/Title';
import SubTitle from '../components/atoms/SubTitle';
import Button from '../components/atoms/Button';

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    fetchHeroImage(setBackgroundImage);
  }, []);

  const handleButtonClick = () => {
    console.log('I was clicked');
  };

  return (
    <div>
      <HeroSection backgroundImage={backgroundImage}>
        <HeroText>Start Making Tracks</HeroText>
      </HeroSection>
      <Icon iconSource={filledHeart} alt={'heart'}></Icon>
      <Title>H1 Title</Title>
      <SubTitle>H2 Title</SubTitle>
      <Button handleClick={handleButtonClick} type={'primary'}>
        Button 1
      </Button>
      <Button handleClick={handleButtonClick} type={'secondary'}>
        Button 2
      </Button>
    </div>
  );
};

export default Home;
