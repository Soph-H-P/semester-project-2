import { baseUrl } from '../settings/api';
import { findInList, getFromStorage } from './storage';

import { bagItemsKey, favouritesKey } from '../settings/settings';

const fetchProducts = async (setProductsArray, featured = false, arrayToCompare = null) => {
  try {
    const url = featured ? `${baseUrl}/products?featured=true` : `${baseUrl}/products`;

    const response = await fetch(url);
    const results = await response.json();

    if (arrayToCompare === 'fav' || arrayToCompare === 'bag') {
      const favs = []
      results.forEach((result) => {
        const isInArray = findInList(
          arrayToCompare === 'fav' ? getFromStorage(favouritesKey) : getFromStorage(bagItemsKey),
          result.id
        );
        if (isInArray !== undefined) {
          favs.push(result)
        }
      });
      setProductsArray(favs);
    } else {
      setProductsArray(results);
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchProducts;
