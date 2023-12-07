import * as model from './model.js';
import articlesView from './views/articlesView.js';

const controlArticles = async function () {
  try {
    await model.getAllArticles();

    articlesView.render(model.state.articles);
  } catch (error) {
    console.error(error);
  }
};

const init = function () {
  articlesView.addHandlerRender(controlArticles);
};
init();
