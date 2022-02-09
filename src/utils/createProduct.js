import { baseUrl } from '../settings/api.js';
import { getToken } from './storage.js';

const createProduct = async (title, price, featured, description, image_url, setIsError, setIsNetworkError) => {
  const form = document.querySelector('form');
  const URL = `${baseUrl}/products`;
  const articleData = JSON.stringify({ title, price, featured, description, image_url });
  const token = getToken();

  const options = {
    method: 'POST',
    body: articleData,
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(URL, options);
    const result = await response.json();
    if (result.id) {
      form.reset();
    } else {
      setIsError(true);
    }
  } catch (error) {
    setIsNetworkError(true);
    console.log(error);
  }
};

export default createProduct;
