import View from './View.js';
import previewView from './previewView.js'; // Results View and Bookmarks View both have almost same content. So we created another view (PreviewView) containing the html/markup that will be common to both the views

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join(''); // In previewView.render(result), we actually want to return a string. So all of this should be a string that we need to return from the generate markup method. So that then in the view, it can insert that markup into the DOM. However, by having render with preview view, preview.js itself will try to render some markup. So, we added a second parameter to it, called render, which by default will be set to true. But if render is false, then we actually want to return the markup that was just generated in the render method.
  }
}

export default new ResultsView();
