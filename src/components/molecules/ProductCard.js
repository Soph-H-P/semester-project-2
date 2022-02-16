import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { baseUrl } from '../../settings/api';
import { getFromStorage, filterList, saveToStorage } from '../../utils/storage';

import edit from '../../assets/icons/editSvg.svg';
import deleteSvg from '../../assets/icons/deleteSvg.svg';

import SubTitle from '../atoms/SubTitle';
import Icon from '../atoms/Icon';
import AddToFavouritesButton from './AddToFavouritesButton';
import Button from '../atoms/Button';
import { bagItemsKey } from '../../settings/settings';

const CardWrpper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  border: ${(props) => props.theme.black} solid 1px;
  background: ${(props) => props.theme.white};
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    border-width: 1px 1px 5px 1px;
  }

  h2 {
    margin-bottom: 0px;
  }

  a {
    transition: all 0.3s ease;
  }

  a:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.primaryColor};
  }

  #imageContainer {
    height: 250px;
    overflow: hidden;
  }

  #imageContainer img {
    object-fit: cover;
    height: 100%;
    object-position: center;
  }

  img {
    width: 100%;
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

  div:last-child {
    align-items: center;
  }
`;

const ProductCard = ({ product, isFavourite, userRole, setItemsInFavourites, setItemsInBag }) => {
  const isBag = typeof setItemsInBag === 'function';

  const handleRemoveItem = (e) => {
    const item = e.target;
    const id = parseInt(item.dataset.id);
    const currentBagItems = getFromStorage(bagItemsKey);
    const removedBagItem = filterList(currentBagItems, id);
    saveToStorage(bagItemsKey, removedBagItem);
    setItemsInBag(getFromStorage(bagItemsKey));
  };

  return (
    <CardWrpper>
      <Link to={`/product/?id=${product.id}`} id="imageContainer">
        <img
          src={product.image ? baseUrl + product.image.formats.small.url : product.image_url}
          alt={product.alternativeText}
        />
      </Link>
      <ProductInfoContainer>
        <div>
          <Link to={`/product/?id=${product.id}`}>
            <SubTitle>{product.title}</SubTitle>
          </Link>

          <p>£{product.price}</p>
        </div>
        <div>
          <AddToFavouritesButton
            isFavourite={isFavourite}
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
      {isBag && (
        <Button handleClick={handleRemoveItem} type="icon" dataId={product.id}>
          <Icon productId={product.id} iconSource={deleteSvg} alt="remove product from bag"></Icon>
        </Button>
      )}
    </CardWrpper>
  );
};

export default ProductCard;
