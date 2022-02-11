import { baseUrl } from '../settings/api';

const fetchProducts = async (setProductsArray) => {
  const url = `${baseUrl}/products`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    setProductsArray(result);

    console.log(result)
  } catch (error) {
    console.log(error);
  }
};

export default fetchProducts;
