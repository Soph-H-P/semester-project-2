import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import edit from '../../assets/icons/editSvg.svg';
import { bagItemsKey } from '../../settings/settings';
import {
  filterList,
  findInList,
  getFromStorage,
  saveToStorage,
  updateStorage,
} from '../../utils/storage';
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
    min-width: 400px;
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
  max-width: 400px;
  cursor: zoom-in;
  overflow: hidden;
  display: flex;
  justify-content: center;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  #add-to-bag {
    position: relative;

    &::after {
      position: absolute;
      content: '';
      height: 10px;
      width: 10px;
      left: 50px;
      top: 15px;
      background: ${(props) => props.theme.primaryColor};
      opacity: 1;
      border-radius: 50%;
      z-index: -1;
    }

    ${(props) =>
      props.pulse &&
      css`
        img {
          height: 30px;
          width: 33px;
        }

        &::after {
          z-index: 1;
          animation: move-up 2s;
        }
      `}

    @keyframes move-up {
      0% {
        height: 10px;
        width: 10px;
        left: 50px;
        top: 15px;
        opacity: 1;
      }
      100% {
        height: 100px;
        width: 100px;
        left: 1000px;
        top: -1000px;
        opacity: 1;
      }
    }
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;

    button {
      margin-bottom: 20px;
    }
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

  const [pulse, setPulse] = useState(false);

  const handleAddToBag = (e) => {
    const bagItem = e.target;
    const id = parseInt(bagItem.dataset.id);
    const currentBagItems = getFromStorage(bagItemsKey);
    const findBagItems = findInList(currentBagItems, id);
    if (findBagItems === undefined) {
      const newBagItem = { id, quantity: 1 };
      currentBagItems.push(newBagItem);
      setCurrentBagArray(currentBagItems);
    } else {
      updateStorage(bagItemsKey, id);
      setCurrentBagArray(getFromStorage(bagItemsKey));
    }
    setPulse(true);
    setTimeout(() => {
      setPulse(false);
    }, 2000);
  };

  const handleRemoveFromBag = (e) => {
    const bagItem = e.target;
    const id = parseInt(bagItem.dataset.id);
    const currentBagItems = getFromStorage(bagItemsKey);
    const removedBagItem = filterList(currentBagItems, id);
    setCurrentBagArray(removedBagItem);
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
    ref.current.style.transformOrigin = `${e.pageX / 6}% ${e.pageY / 6}%`;
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
              src={product.attributes.image_url ? product.attributes.image_url : ''}
              alt={product.attributes.alternativeText || product.attributes.title}
              ref={ref}
            />
          </ImageContainer>
          <div>
            <ProductInfoContainer>
              <div>
                <Title>{product.attributes.title}</Title>
                <p>£{product.attributes.price.toFixed(2)}</p>
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
            <p>{product.attributes.description}</p>
            <ButtonContainer pulse={pulse}>
              <Button id="add-to-bag" dataId={product.id} handleClick={handleAddToBag}>
                Add to Bag
              </Button>
              {findInList(currentBagArray, product.id) && (
                <Button type="secondary" dataId={product.id} handleClick={handleRemoveFromBag}>
                  Remove item(s)
                </Button>
              )}
            </ButtonContainer>
          </div>
        </>
      )}
    </ProductDetailsWrapper>
  );
};

export default ProductDetails;
