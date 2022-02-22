import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import filledHeart from '../../assets/icons/filledHeartSvg.svg';
import outlineHeart from '../../assets/icons/outlineHeartSvg.svg';
import { favouritesKey } from '../../settings/settings';
import { filterList, findInList, getFromStorage, saveToStorage } from '../../utils/storage';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

const AddToFavouritesContainer = styled.div`
  position: relative;
  height: 58px;

  button {
    z-index: 1;
    posiion: relative;
  }

  &::before {
    position: absolute;
    content: '';
    height: 10px;
    width: 10px;
    left: 25px;
    top: 25px;
    background: ${(props) => props.theme.primaryColor};
    opacity: 0;
    border-radius: 50%;
    z-index: 0;
  }

  ${(props) =>
    props.favourite &&
    css`
  &::before {
    position: absolute;
    animation: click-wave 0.5s;
  `}

  @keyframes click-wave {
    0% {
      height: 10px;
      width: 10px;
      left: 25px;
      top: 25px;
      opacity: 0.6;
      position: relative;
    }
    100% {
      height: 100px;
      width: 100px;
      left: -20px;
      top: -25px;
      opacity: 0;
    }
  }
`;

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
    <AddToFavouritesContainer favourite={isFavourite}>
      <Button handleClick={handleAddToFavourites} icon={true} data-id={productId}>
        <Icon
          productId={productId}
          iconSource={isFavourite ? filledHeart : outlineHeart}
          alt={isFavourite ? 'remove from favourites' : 'add to favourites'}
          aria-label="favourites"
        ></Icon>
      </Button>
    </AddToFavouritesContainer>
  );
};

export default AddToFavouritesButton;
