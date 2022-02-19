import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import edit from '../../assets/icons/editSvg.svg';
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

  p {
    text-align: left;
    padding: 20px;
  }

  & > div {
    min-width: 500px;
    text-align: center;
  }

  @media (max-width: 850px) {
    & > div {
      min-width: 350px;
    }
  }

  @media (max-width: 730px) {
    flex-direction: column;
    margin: 20px 0px;

    & > div {
      min-width: 280px;
    }

    & > p {
      text-align: left;
      padding-left: 0px;
      padding-top: 20px;
      margin: 0px;
    }
  }
`;

const ImageContainer = styled.div`
  max-height: 400px;
  overflow: hidden;
  cursor: zoom-in;
  position: relative;

  img {
    max-width: 100%;
    max-height: 450px;
  }

  button {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;

const ProductInfoContainer = styled.div`
  display: flex;
  padding: 0px 20px;
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

  const handleImageZoom = () => {
    setImageZoom(!imageZoom);
  };

  const [currentBagArray, setCurrentBagArray] = useState(getFromStorage(bagItemsKey));

  useEffect(() => {
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

  const ref = useRef(null);

  const handleMouseEnter = () => {
    handleImageZoom();
    ref.current.style.transform = 'scale(2)';
  };
  const handleMouseLeave = () => {
    handleImageZoom();
    ref.current.style.transform = 'scale(1)';
  };
  const handleMouseMove = (e) => {
    ref.current.style.transformOrigin = `${e.pageX - 10}px ${e.pageY - 150}px`;
  };

  return (
    <ProductDetailsWrapper>
      {(Object.keys(product).length === 0) === 0 && <Loader />}
      {Object.keys(product).length >= 1 && (
        <>
          <ImageContainer
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}
            onTouchMove={handleMouseMove}
          >
            <img
              src={
                product.image && !imageZoom
                  ? baseUrl + product.image.formats.medium.url
                  : product.image && imageZoom
                  ? baseUrl + product.image.formats.large.url
                  : product.image_url
              }
              alt={product.alternativeText || product.title}
              ref={ref}
            />
          </ImageContainer>
          <div>
            <ProductInfoContainer>
              <div>
                <Title>{product.title}</Title>
                <p>£{product.price.toFixed(2)}</p>
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
            <p>{product.description}</p>
            <Button dataId={product.id} handleClick={handleAddToBag}>
              {findInList(currentBagArray, product.id) ? 'Remove ' : 'Add to Bag'}
            </Button>
          </div>
        </>
      )}
    </ProductDetailsWrapper>
  );
};

export default ProductDetails;
