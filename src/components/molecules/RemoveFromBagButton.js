import React from 'react';

import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

import deleteSvg from '../../assets/icons/deleteSvg.svg';

const RemoveFromBagButton = ({ productId }) => {
  const handleRemoveFromBag = () => {
    console.log('remove from bag');
  };

  return (
    <Button handleClick={handleRemoveFromBag} type="icon">
      <Icon
        data-id={productId}
        iconSource={deleteSvg}
        alt="delete item"
        aria-label="remove from bag"
      ></Icon>
    </Button>
  );
};

export default RemoveFromBagButton;
