import { baseUrl } from '../settings/api.js';
import { getToken } from './storage.js';

const createProduct = async (
  title,
  price,
  featured,
  description,
  image_url,
  setIsError,
  setIsNetworkError,
  setIsSuccess
) => {
  const URL = `${baseUrl}/products`;
  const productData = JSON.stringify({
    title,
    price,
    featured,
    description,
    image_url,
  });
  const token = getToken();

  const options = {
    method: 'POST',
    body: productData,
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(URL, options);
    const result = await response.json();
    console.log('only create')
    if (result.id) {
      setIsSuccess(result.id);
    } else {
      setIsError(true);
    }
  } catch (error) {
    setIsNetworkError(true);
    console.log(error);
  }
};

export default createProduct;
