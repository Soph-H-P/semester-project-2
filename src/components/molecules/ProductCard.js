import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { baseUrl } from '../../settings/api';

import edit from '../../assets/icons/editSvg.svg';

import SubTitle from '../atoms/SubTitle';
import Icon from '../atoms/Icon';
import AddToFavouritesButton from './AddToFavouritesButton';

const CardWrpper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  border: ${(props) => props.theme.black} solid 1px;
  margin-bottom: 20px;
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

const ProductCard = ({ product, isFavourite, isAdmin }) => {
  return (
    <CardWrpper>
      <Link to={`/product/?id=${product.id}`}>
        <img src={baseUrl + product.url} alt={product.altText} />
      </Link>
      <ProductInfoContainer>
        <div>
          <Link to={`/product/?id=${product.id}`}>
            <SubTitle>{product.titleOfProduct}</SubTitle>
          </Link>

          <p>£{product.price}</p>
        </div>
        <div>
          <AddToFavouritesButton isFavourite={isFavourite} productId={product.id} />
          {isAdmin && (
            <Link to="/content-editor">
              <Icon iconSource={edit} alt="edit product"></Icon>
            </Link>
          )}
        </div>
      </ProductInfoContainer>
    </CardWrpper>
  );
};

export default ProductCard;
