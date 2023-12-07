class ArticlesView {
  _parentElement = document.querySelector('.articles-section__list');

  addHandlerRender(handler) {
    ['load'].forEach(ev => window.addEventListener(ev, handler));
  }

  render(data) {
    let markup = '';
    this._parentElement.innerHTML = '';

    data.forEach(article => {
      console.log(article);
      markup += `
        <li class="articles-section__item">
          <article class="article-card">
            <h2 class="article-card__title">${
              article.title ? article.title : 'untitled'
            }</h2>
            <p class="article-card__text">
              ${article.text}
            </p>
            <p class="article-card__author">${article.author}</p>
            <p class="article-card__date">${article.createdAt}</p>
          </article>
        </li> 
        `;
    });

    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new ArticlesView();
