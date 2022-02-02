import { baseUrl } from '../settings/api.js';
import { getToken } from './storage.js';
import { renderMessage } from './renderFunctions/renderMessage.js';

const createArticle = async (title, author, summary) => {
  const form = document.querySelector('form');
  const URL = `${baseUrl}/articles`;
  const articleData = JSON.stringify({ title, author, summary });
  const error = document.querySelector('.error__container');
  error.innerHTML = '';
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
      renderMessage(
        'success',
        `Saved, <a class="new-article__link" href="/news.html?id=${result.id}">view article</a>`,
        '.error__container'
      );
      form.reset();
    }
  } catch (error) {
    renderMessage(
      'error',
      `Error saving your new article please try again later`,
      '.error__container'
    );
    console.log(error);
  }
};

export default createArticle;
