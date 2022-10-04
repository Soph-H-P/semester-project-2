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
  const token = getToken();

  const reviewObj = JSON.stringify({
    data: {
      title,
      price,
      featured,
      description,
      image_url,
    },
  });

  const options = {
    method: 'POST',
    body: reviewObj,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(URL, options);
    const result = await response.json();

    if (result.data.id) {
      setIsSuccess(result.data.id);
      navigate(`/content-editor?id=${result.data.id}`);
    } else {
      setIsError(true);
    }
  } catch (error) {
    setIsNetworkError(true);
    console.log(error);
  }
};

export default createProduct;
