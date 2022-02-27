const calculateNumberOfItems = (itemsInBag) => {
  let numberOfItems = 0;
  if (itemsInBag.length > 0) {
    itemsInBag.forEach((item) => (numberOfItems += item.quantity));
  }

  return numberOfItems;
};

export default calculateNumberOfItems;
