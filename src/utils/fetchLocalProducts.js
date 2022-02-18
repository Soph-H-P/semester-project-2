import { baseUrl } from '../settings/api';
import { findInList } from './storage';

const fetchLocalProducts = async (setCurrentItems, itemsInList, setIsError) => {
  const url = `${baseUrl}/products`;

  try {
    const response = await fetch(url);
    const results = await response.json();
    const items = []


    results.forEach((result) => {
      const isInList = findInList(itemsInList, result.id)
      if(isInList !== undefined) {
        items.push(result)
      }
    })

    setCurrentItems(items);
  } catch (error) {
    setIsError(true)
    console.log(error);
  }
};

export default fetchLocalProducts;
