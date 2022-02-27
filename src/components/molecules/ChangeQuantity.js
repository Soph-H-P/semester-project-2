import React, { useEffect, useState } from 'react';
import { bagItemsKey } from '../../settings/settings';
import { saveToStorage, getFromStorage, updateStorage } from '../../utils/storage';

import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import plusSvg from '../../assets/icons/plusSvg.svg';
import minusSvg from '../../assets/icons/minusSvg.svg';
import styled from 'styled-components';

const ChangeQuantityContainer = styled.div`
  img {
    height: 15px;
    max-width: 15px;
  }
`;

const ChangeQuantity = ({ quantity, setItemsInBag, productId }) => {
  const [currentBagArray, setCurrentBagArray] = useState(getFromStorage(bagItemsKey));

  useEffect(() => {
    saveToStorage(bagItemsKey, currentBagArray);
    setItemsInBag(getFromStorage(bagItemsKey));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBagArray]);

  const addItem = (e) => {
    const item = e.target;
    const id = parseInt(item.dataset.id);
    updateStorage(bagItemsKey, id);
    setCurrentBagArray(getFromStorage(bagItemsKey));
    console.log(item);
  };

  const removeItem = (e) => {
    const item = e.target;
    const id = parseInt(item.dataset.id);
    updateStorage(bagItemsKey, id, true);
    setCurrentBagArray(getFromStorage(bagItemsKey));
  };

  return (
    <ChangeQuantityContainer>
      <Button icon={true} handleClick={removeItem} dataId={productId}>
        <Icon iconSource={minusSvg} alt="remove one item" productId={productId} />
      </Button>
      <p>Quantity: {quantity}</p>
      <Button icon={true} handleClick={addItem}>
        <Icon iconSource={plusSvg} alt="add one item" productId={productId} />
      </Button>
    </ChangeQuantityContainer>
  );
};

export default ChangeQuantity;
