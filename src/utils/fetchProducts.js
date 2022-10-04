import { baseUrl } from '../settings/api';

const fetchProducts = async (setProductsArray, setIsError, setIsLoading, featured = false) => {
  const url = featured ? `${baseUrl}/products?featured=true` : `${baseUrl}/products`;
  try {
    setIsLoading(true);
    const response = await fetch(url);
    const result = await response.json();

    setProductsArray(result.data);
  } catch (error) {
    setIsError(true);
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

export default fetchProducts;
