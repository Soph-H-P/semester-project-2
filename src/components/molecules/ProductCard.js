import React from 'react';
import styled from 'styled-components';

import { baseUrl } from '../../settings/api';

import edit from '../../assets/icons/editSvg.svg';

import SubTitle from '../atoms/SubTitle';
import Icon from '../atoms/Icon';
import AddToFavouritesButton from './AddToFavouritesButton';

const CardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  border: ${(props) => props.theme.black} solid 1px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    border-width: 1px 1px 5px 1px;
  }

  h2 {
    margin-bottom: 0px;
  }

  a {
    width: 50px;
    height: 50px;
    transition: all 0.3s ease;
  }

  a:hover {
    transform: scale(1.1);
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

const ProductCard = ({ product, isFavourite, isAdmin }) => {
  return (
    <CardWrapper href={`/product?id=${product.id}`}>
      <img src={baseUrl + product.url} alt="" />
      <ProductInfoContainer>
        <div>
          <SubTitle>{product.titleOfProduct}</SubTitle>
          <p>£{product.price}</p>
        </div>
        <div>
          <AddToFavouritesButton isFavourite={isFavourite} productId={product.id} />
          {isAdmin && (
            <a href="/content-editor">
              <Icon iconSource={edit} alt="edit product"></Icon>
            </a>
          )}
        </div>
      </ProductInfoContainer>
    </CardWrapper>
  );
};

export default ProductCard;
