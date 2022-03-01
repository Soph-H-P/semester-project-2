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
  setIsSuccess,
  navigate
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
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(URL, options);
    const result = await response.json();
    
    if (result.id) {
      setIsSuccess(result.id);
      navigate(`/content-editor?id=${result.id}`);
    } else {
      setIsError(true);
    }
  } catch (error) {
    setIsNetworkError(true);
    console.log(error);
  }
};

export default createProduct;
