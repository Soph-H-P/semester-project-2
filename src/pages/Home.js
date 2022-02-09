import React, { useState, useEffect } from 'react';
import HeroSection from '../components/atoms/HeroSection';
import fetchHeroImage from '../utils/fetchHeroImage';
import HeroText from '../components/atoms/HeroText';
import Icon from '../components/atoms/Icon';
import filledHeart from '../assets/icons/filledHeartSvg.svg';
import Title from '../components/atoms/Title';
import SubTitle from '../components/atoms/SubTitle';
import Button from '../components/atoms/Button';
import ToggleCheckBox from '../components/atoms/ToggleCheckBox';
import TextInput from '../components/atoms/TextInput';
import NumberInput from '../components/atoms/NumberInput';
import BagSummaryRow from '../components/molecules/BagSummaryRow';
import Loader from '../components/atoms/Loader';
import SearchInput from '../components/molecules/SearchInput';
import IntegratedButtonInput from '../components/molecules/IntegratedButtonInput';
import AddToFavouritesButton from '../components/molecules/AddToFavouritesButton';
import ProductCard from '../components/molecules/ProductCard';
import SignIn from '../components/molecules/SignIn';
import BagItem from '../components/organisms/BagItem';
import OrderSummary from '../components/organisms/OrderSummary';

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    fetchHeroImage(setBackgroundImage);
  }, []);

  const handleButtonClick = () => {
    console.log('I was clicked');
  };

  const product = {
    titleOfProduct: 'title here',
    price: 120.0,
    id: 123,
    isFeatured: true,
    url: '/uploads/lefteris_kallergis_j1_Gi_Plv_SGWI_unsplash_b817ef75da.jpg',
  };

  return (
    <div>
      <HeroSection backgroundImage={backgroundImage}>
        <HeroText>Start Making Tracks</HeroText>
      </HeroSection>
      <Icon iconSource={filledHeart} alt="heart"></Icon>
      <Title>H1 Title</Title>
      <SubTitle>H2 Title</SubTitle>
      <Button handleClick={handleButtonClick} type="primary">
        Button 1
      </Button>
      <Button handleClick={handleButtonClick} type="secondary">
        Button 2
      </Button>
      <ToggleCheckBox label="toggle label" name="sample-toggle" />
      <TextInput label="text input" name="sample-text-input" required={true}></TextInput>
      <NumberInput label="number input" name="sample-number-input" required={true}></NumberInput>
      <BagSummaryRow title="Subtotal" value="£00.00" details="2 items"></BagSummaryRow>
      <Loader />
      <SearchInput />
      <IntegratedButtonInput buttonText="button" inputLabel="Label here" inputName="input-name" />
      <AddToFavouritesButton isFavourite={true} productId="123"></AddToFavouritesButton>
      <ProductCard product={product} isFavourite={false} isAdmin={true} />
      <BagItem product={product} isFavourite={false} />
      <OrderSummary numberOfItems={9} />
      <SignIn />
    </div>
  );
};

export default Home;
