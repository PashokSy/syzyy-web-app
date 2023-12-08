export default class View {
  _data;
  _parentElement;

  render(data) {
    if (!data) return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    this._clean();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = 'Something went wrong') {
    const markup = `
            <div class="error">
             <p>${message}<p>
            </div>
        `;
  }

  _clean() {
    this._parentElement.innerHTML = '';
  }
}
