class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      // submit event- when the form is submitted- either by htting enter key, or pressing the search button
      e.preventDefault();
      handler();
      // We are directly not invoking the handler method, because we first need to prevent default, i.e., prevent the form from reloading the page. Then we will call the handler function
    });
  }
}

export default new SearchView();
