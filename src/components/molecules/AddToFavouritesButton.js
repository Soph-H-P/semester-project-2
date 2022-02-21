import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import filledHeart from '../../assets/icons/filledHeartSvg.svg';
import outlineHeart from '../../assets/icons/outlineHeartSvg.svg';
import { favouritesKey } from '../../settings/settings';
import { filterList, findInList, getFromStorage, saveToStorage } from '../../utils/storage';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

const FavouritesButtonContainer = styled.div`
  position: relative;


  button {
    z-index: 1;
  }


  #flying-heart {
    position: absolute;
    left: 8px;
    top: 8px;
    z-index: 0;
    opacity: 0; 
    transition: opacity 0.3s ease, top 1s ease;
  }
  
  ${(props) =>
    props.favourite &&
    css`
      #flying-heart {
        position: absolute;
        left: 8px;
        top: -300px;
        opacity: 1; 
      }
    `}
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
    <FavouritesButtonContainer favourite={isFavourite}>
      <Button handleClick={handleAddToFavourites} icon={true} data-id={productId}>
        <Icon
          productId={productId}
          iconSource={isFavourite ? filledHeart : outlineHeart}
          alt={isFavourite ? 'remove from favourites' : 'add to favourites'}
          aria-label="favourites"
        ></Icon>
      </Button>
        <Icon
          productId="flying-heart"
          iconSource={filledHeart}
          alt={isFavourite ? 'remove from favourites' : 'add to favourites'}
          aria-label="favourites"
        ></Icon>
    </FavouritesButtonContainer>
  );
};

export default AddToFavouritesButton;
