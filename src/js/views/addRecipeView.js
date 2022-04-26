import View from './View.js';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded :)';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _btnAddMore = document.querySelector('.upload__column__btn');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
    this._addHandlerAddMoreIng();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerAddMoreIng() {
    this._btnAddMore.addEventListener('click', function (e) {
      // console.log(e.target);
      e.preventDefault();

      let ingsTotal = document.querySelectorAll('.upload__column__ing').length;

      const markup = `
      <label>Ingredient ${ingsTotal + 1}</label>
      <div class="upload__column__ing">
        <input
          value=""
          type="number"
          name="ingredient-${ingsTotal + 1}q"
          placeholder="Quantity, Eg: 0.5"
        />
        <input
          value=""
          type="text"
          name="ingredient-${ingsTotal + 1}u"
          placeholder="Unit, Eg: kg"
        />
        <input
          value=""
          type="text"
          name="ingredient-${ingsTotal + 1}d"
          placeholder="Description, Eg: Rice"
        />
      </div>`;

      e.target.insertAdjacentHTML('beforebegin', markup);
    });
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this)); // this keyword will point to the current object
  } // Because this function is not used by the controller, we can mark it as protected. And same for others.

  _addHandlerHideWindow() {
    // When user clicks the close button
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    // When user click outside the form window
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      // To get access to the values in the form, we can either select the form elements one by one then read values on each of them but their is an easier way and that is using FormData (It's a modern browser API)-
      const dataArray = [...new FormData(this)]; // We can create a new form data and into the form data constructor, we have to pass in an element that is a form, which in this case is this keyword only which points to this.parentElement only which is our form.
      // Now this form data will return a weird object that we cannot really use, but we can spread that object into an array using the spread operator. This will give us an array which contains all the fields with all the values in there.
      // console.log(dataArray);

      // Since our recipes is an object, so we'll convert the data into object-
      const data = Object.fromEntries(dataArray); // takes an array of entries and converts it to an object

      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
