import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto; // converting this string to number

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (currPage === 1 && numPages > 1) {
      return this._generateMarkupButton('next', currPage);
    }

    // Last page
    if (currPage === numPages && numPages > 1) {
      return this._generateMarkupButton('prev', currPage);
    }

    // Other page
    if (currPage < numPages) {
      return `${
        this._generateMarkupButton('prev', currPage) +
        this._generateMarkupButton('next', currPage)
      }`;
    }

    // Page 1, and there are no other pages
    return '';
  }

  _generateMarkupButton(buttonType, currPage) {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const goToPage = buttonType === 'prev' ? currPage - 1 : currPage + 1;
    return `
        <button data-goto="${goToPage}" class="btn--inline pagination__btn--${buttonType}">
            <span>Page ${goToPage} of ${numPages}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-${
      buttonType === 'prev' ? 'left' : 'right'
    }"></use>
            </svg>
        </button>`;
  }
}

export default new PaginationView();
