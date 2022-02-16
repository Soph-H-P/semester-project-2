import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { baseUrl } from '../../settings/api';
import NumberInput from '../atoms/NumberInput';
import SubTitle from '../atoms/SubTitle';
import AddToFavouritesButton from '../molecules/AddToFavouritesButton';
import RemoveFromBagButton from '../molecules/RemoveFromBagButton';

const BagItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  border: ${(props) => props.theme.black} solid 1px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 10px;

  a:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.primaryColor};
  }

  img {
    width: 100%;
  }

  div {
    display: flex;
  }
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
`;

const BagItem = ({ product, isFavourite }) => {
  const [totalPrice, setTotalPrice] = useState(product.price);

  const handleChange = (e) => {
    setTotalPrice(product.price * parseInt(e.target.value));
  };

  return (
    <BagItemWrapper>
      <div>
        <Link to={`/product/?id=${product.id}`}>
          <img src={baseUrl + product.url} alt={product.altText} />
        </Link>
        <div>
          <AddToFavouritesButton isFavourite={isFavourite} productId={product.id} />
          <RemoveFromBagButton productId={product.id} />
        </div>
      </div>
      <ProductInfoContainer>
        <Link to={`/product/?id=${product.id}`}>
          <SubTitle>{product.titleOfProduct}</SubTitle>
        </Link>
        <NumberInput
          onChange={handleChange}
          label="Quantity:"
          inputName="quantity"
          required={false}
        />
        <p>Total Price: £{totalPrice}</p>
      </ProductInfoContainer>
    </BagItemWrapper>
  );
};

export default BagItem;
