import { renderMessage } from './renderFunctions/renderMessage.js';
import { baseUrl } from '../settings/api.js';
import { getToken } from './storage.js';

const deleteArticle = async (id) => {
  const URL = `${baseUrl}/articles/${id}`;
  const error = document.querySelector('.error__container');
  error.innerHTML = '';
  const token = getToken();

  const options = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(URL, options);
    renderMessage('success', 'Successfully deleted ', '.container');
    setTimeout(() => {
      location.href = '/';
    }, 1000);
  } catch (error) {
    renderMessage(
      'error',
      'Error deleting this article please try again later',
      '.error__container'
    );
    console.log(error);
  }
};

export default deleteArticle;
