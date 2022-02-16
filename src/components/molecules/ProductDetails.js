import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import closeSvg from '../../assets/icons/closeSvg.svg';
import edit from '../../assets/icons/editSvg.svg';
import zoomSvg from '../../assets/icons/zoomSvg.svg';
import { baseUrl } from '../../settings/api';
import { bagItemsKey } from '../../settings/settings';
import { filterList, findInList, getFromStorage, saveToStorage } from '../../utils/storage';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Loader from '../atoms/Loader';
import Title from '../atoms/Title';
import AddToFavouritesButton from './AddToFavouritesButton';

const ProductDetailsWrapper = styled.div`
  position: relative;
  display: flex;
  background: ${(props) => props.theme.darkerBackgroundColor};
  padding: 20px;
  margin: 20px;
  min-width: 320px;

  & > p {
    text-align: left;
    padding-left: 20px;
    margin: 0px;
  }

  & > div {
    min-width: 280px;
    text-align: center;
  }

  @media (max-width: 730px) {
    flex-direction: column;
    margin: 20px 0px;

    & > p {
      text-align: left;
      padding-left: 0px;
      padding-top: 20px;
      margin: 0px;
    }
  }
`;

const ImageContainer = styled.div`
  height: 250px;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  button {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;

const ImageZoomContainer = styled.div`
  position: absolute;
  background: ${(props) => props.theme.darkerBackgroundColor};
  cursor: pointer;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  z-index: 1;
  top: 0px;
  left: 0px;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  button {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

const ProductInfoContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    text-align: left;
    padding-left: 0px;
    margin: 0px;
  }

  div:last-child {
    align-items: center;
  }
`;

const ProductDetails = ({ product, userRole, setItemsInBag, setItemsInFavourites }) => {
  const [imageZoom, setImageZoom] = useState(false);

  const handleImageClick = () => {
    setImageZoom(!imageZoom);
  };

  const [currentBagArray, setCurrentBagArray] = useState(getFromStorage(bagItemsKey));

  const [isInBag, setIsInBag] = useState(findInList(currentBagArray, product.id));

  useEffect(() => {
    setIsInBag(findInList(currentBagArray, product.id));
    saveToStorage(bagItemsKey, currentBagArray);
    setItemsInBag(getFromStorage(bagItemsKey));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBagArray]);

  const handleAddToBag = (e) => {
    const favourite = e.target;
    const id = parseInt(favourite.dataset.id);
    const currentBagItems = getFromStorage(bagItemsKey);
    const findFavourite = findInList(currentBagItems, id);
    if (findFavourite === undefined) {
      const newFavourite = { id };
      currentBagItems.push(newFavourite);
      setCurrentBagArray(currentBagItems);
    } else {
      const removedBagItem = filterList(currentBagItems, id);
      setCurrentBagArray(removedBagItem);
    }
  };

  return (
    <ProductDetailsWrapper>
      {(Object.keys(product).length === 0) === 0 && <Loader />}
      {Object.keys(product).length >= 1 && (
        <>
          <div>
            {imageZoom && (
              <ImageZoomContainer onClick={handleImageClick}>
                <img
                  src={
                    product.image ? baseUrl + product.image.formats.large.url : product.image_url
                  }
                  alt={product.alternativeText}
                />
                <Button type={'icon'} handleClick={handleImageClick}>
                  <Icon iconSource={closeSvg} alt="edit product"></Icon>
                </Button>
              </ImageZoomContainer>
            )}
            <ImageContainer onClick={handleImageClick}>
              <img
                src={product.image ? baseUrl + product.image.formats.small.url : product.image_url}
                alt={product.alternativeText}
              />
              <Button type={'icon'} handleClick={handleImageClick}>
                <Icon iconSource={zoomSvg} alt="edit product"></Icon>
              </Button>
            </ImageContainer>
            <ProductInfoContainer>
              <div>
                <Title>{product.title}</Title>
                <p>£{product.price}</p>
              </div>
              <div>
                <AddToFavouritesButton
                  isFavourite={true}
                  productId={product.id}
                  setItemsInFavourites={setItemsInFavourites}
                />
                {userRole === 'Authenticated' && (
                  <Link to={`/content-editor?id=${product.id}`}>
                    <Icon iconSource={edit} alt="edit product"></Icon>
                  </Link>
                )}
              </div>
            </ProductInfoContainer>
            <Button dataId={product.id} handleClick={handleAddToBag}>
              {isInBag ? 'Remove ' : 'Add to Bag'}
            </Button>
          </div>
          <p>{product.description}</p>
        </>
      )}
    </ProductDetailsWrapper>
  );
};

export default ProductDetails;
