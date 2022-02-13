import { baseUrl } from '../settings/api';

const fetchProducts = async (setProductsArray, featured = false) => {
  const url = featured ? `${baseUrl}/products?featured=true` : `${baseUrl}/products`;
  try {
    const response = await fetch(url);
    const result = await response.json();

    setProductsArray(result);
  } catch (error) {
    console.log(error);
  }
};

export default fetchProducts;
