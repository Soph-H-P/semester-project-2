import React from 'react';

import deleteSvg from '../../assets/icons/deleteSvg.svg';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

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
