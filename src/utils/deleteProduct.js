import { baseUrl } from '../settings/api.js';
import { getToken, deleteFromStorage } from './storage.js';

const deleteProduct = async (reRouteUser, id, setIsDeleted, setItemsInBag) => {
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
      deleteFromStorage(id);
      setTimeout(() => {
        reRouteUser('/products');
      }, 1500);
    }
  } catch (error) {
    setIsDeleted('error');
    console.log(error);
  }
};

export default deleteProduct;
