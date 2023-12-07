import { API_URL } from './config.js';
import { AJAX } from './helpers.js';

export const state = {
  articles: [],
};

const getAuthorNickName = async function (id) {
  try {
    return nickName;
  } catch (error) {
    console.error(error);
  }
};

export const getAllArticles = async function () {
  try {
    const articles = await AJAX(`${API_URL}article`);

    await articles.forEach(async article => {
      const { nickName } = await AJAX(`${API_URL}author/${article.authorId}`);
      article.author = nickName;
    });

    state.articles.push(...articles);
  } catch (error) {
    console.error(error);
  }
};
