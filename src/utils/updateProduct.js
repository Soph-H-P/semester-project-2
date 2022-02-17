import { baseUrl } from '../settings/api.js';
import { getToken } from './storage.js';

const updateProduct = async (
  title,
  price,
  featured,
  description,
  image_url,
  setIsError,
  setIsNetworkError,
  setIsSuccess,
  id
) => {
  const URL = `${baseUrl}/products/${id}`;
  const productData = JSON.stringify({
    title,
    price,
    featured,
    description,
    image_url,
  });
  const token = getToken();

  const options = {
    method: 'PUT',
    body: productData,
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(URL, options);
    const result = await response.json();
    if (result.id) {
      console.log('only update')
      setIsSuccess(result.id);
    } else {
      setIsError(true);
    }
  } catch (error) {
    console.log(error);
  }
};

export default updateProduct;
