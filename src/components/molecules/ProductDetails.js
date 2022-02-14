import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { baseUrl } from '../../settings/api';
import Loader from '../atoms/Loader';
import Title from '../atoms/Title';
import Icon from '../atoms/Icon';
import edit from '../../assets/icons/editSvg.svg';
import AddToFavouritesButton from './AddToFavouritesButton';

import ProductCard from './ProductCard';

const ProductDetailsWrapper = styled.div`
  display: flex;
  background: ${(props) => props.theme.darkerBackgroundColor};
  padding: 20px;
  margin: 20px;

  p {
    padding: 20px;
  }
`;

const ProductDetails = ({ product, userRole }) => {
  return (
    <ProductDetailsWrapper>
      {(Object.keys(product).length === 0) === 0 && <Loader />}
      {Object.keys(product).length >= 1 && (
        <>
          <ProductCard
            key={product.id}
            product={product}
            isFavourite={false}
            userRole={userRole}
            isDetailed={true}
          />
          <div>
            <img
              src={product.image ? baseUrl + product.image.formats.small.url : product.image_url}
              alt={product.alternativeText}
            />
            <div>
              <Title>{product.title}</Title>

              <p>£{product.price}</p>
            </div>
            <div>
              <AddToFavouritesButton isFavourite={true} productId={product.id} />
              {userRole === 'Authenticated' && (
                <Link to={`/content-editor?id=${product.id}`}>
                  <Icon iconSource={edit} alt="edit product"></Icon>
                </Link>
              )}
            </div>
          </div>
          <p>{product.description}</p>
        </>
      )}
    </ProductDetailsWrapper>
  );
};

export default ProductDetails;
