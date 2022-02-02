import { baseUrl } from '../settings/api.js';
import { getToken } from './storage.js';
import { renderMessage } from './renderFunctions/renderMessage.js';

const updateArticle = async (title, author, summary, id) => {
  const URL = `${baseUrl}/articles/${id}`;
  const articleData = JSON.stringify({ title, author, summary });
  const error = document.querySelector('.error__container');
  error.innerHTML = '';
  const token = getToken();

  const options = {
    method: 'PUT',
    body: articleData,
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(URL, options);
    const result = await response.json();

    if (result.updated_at) {
      renderMessage(
        'success',
        `Saved, <a class="new-article__link" href="/news.html?id=${result.id}">view article</a>`,
        '.error__container'
      );
    }
  } catch (error) {
    renderMessage('error', `Error saving your changes please try again later`, '.error__container');
    console.log(error);
  }
};

export default updateArticle;
