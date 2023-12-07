import { API_URL } from './config.js';
import { AJAX } from './helpers.js';

export const state = {
  articles: [],
};

export const getAllArticles = async function () {
  try {
    const articles = await AJAX(`${API_URL}article`);

    state.articles = articles;
  } catch (error) {
    console.error(error);
  }
};
