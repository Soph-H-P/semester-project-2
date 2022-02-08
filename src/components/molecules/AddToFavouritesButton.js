import React from 'react';

import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

import filledHeart from '../../assets/icons/filledHeartSvg.svg';
import outlineHeart from '../../assets/icons/outlineHeartSvg.svg';

const AddToFavouritesButton = ({ isFavourite, productId }) => {
  const handleAddToFavourites = () => {
    console.log('added to favourites');
  };

  return (
    <Button handleClick={handleAddToFavourites} type="icon">
      <Icon
        data-id={productId}
        iconSource={isFavourite ? filledHeart : outlineHeart}
        alt={isFavourite ? 'remove from favourites' : 'add to favourites'}
        aria-label="favourites"
      ></Icon>
    </Button>
  );
};

export default AddToFavouritesButton;
