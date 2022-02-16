import React, { useState, useEffect } from 'react';

import { favouritesKey } from '../../settings/settings';
import { getFromStorage, findInList, filterList, saveToStorage } from '../../utils/storage';

import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

import filledHeart from '../../assets/icons/filledHeartSvg.svg';
import outlineHeart from '../../assets/icons/outlineHeartSvg.svg';

const AddToFavouritesButton = ({ productId, setItemsInFavourites }) => {
  const [currentFavouritesArray, setCurrentFavouritesArray] = useState(
    getFromStorage(favouritesKey)
  );

  const [isFavourite, setIsFavourite] = useState(findInList(currentFavouritesArray, productId));

  useEffect(() => {
    setIsFavourite(findInList(currentFavouritesArray, productId));
    saveToStorage(favouritesKey, currentFavouritesArray);
    setItemsInFavourites(getFromStorage(favouritesKey));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFavouritesArray]);

  const handleAddToFavourites = (e) => {
    const favourite = e.target;
    const id = parseInt(favourite.dataset.id);
    const currentFavourites = getFromStorage(favouritesKey);
    const findFavourite = findInList(currentFavourites, id);
    if (findFavourite === undefined) {
      const newFavourite = { id };
      currentFavourites.push(newFavourite);
      setCurrentFavouritesArray(currentFavourites);
    } else {
      const removedFavourite = filterList(currentFavourites, id);
      setCurrentFavouritesArray(removedFavourite);
    }
  };

  return (
    <Button handleClick={handleAddToFavourites} type="icon" data-id={productId}>
      <Icon
        productId={productId}
        iconSource={isFavourite ? filledHeart : outlineHeart}
        alt={isFavourite ? 'remove from favourites' : 'add to favourites'}
        aria-label="favourites"
      ></Icon>
    </Button>
  );
};

export default AddToFavouritesButton;
