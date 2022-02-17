import { baseUrl } from '../settings/api.js';
import { getToken } from './storage.js';

const deleteProduct = async (reRouteUser, id, setIsDeleted) => {
  const url = `${baseUrl}/products/${id}`;
  const token = getToken();

  const options = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    if (response.status === 200) {
      setIsDeleted(true);
      setTimeout(() => {
        reRouteUser('/products');
      }, 1000);
    }
  } catch (error) {
    console.log(error);
  }
};

export default deleteProduct;
