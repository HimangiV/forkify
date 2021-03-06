# Forkify Project

**A recipe finding and recipe upload web application**

Forkify is a JavaScript application which uses the Forkify API created by Jonas Schmedtmann to fetch and display a recipe or a list of recipes on user search.

The project is created using the Model View Controller (MVC) Architecture

## Find my project at

https://forkify-himangi.netlify.app/

https://github.com/HimangiV/forkify

## Installation

Run the below commands in your CLI-

1. Clone the repository
   `git clone https://github.com/HimangiV/forkify.git`
2. Install Node Package Manager
   `npm install`
3. Run the project
   `npm run start`

You can use your own API key to add recipes-

1. Go to https://forkify-api.herokuapp.com/v2. Generate your API key
2. Replace the value in **KEY** in _config.js_ file with your API Key

## Features

- The user can search for a specific recipe. A list of recipes will be displayed with at most 10 recipes in one page. The total number of pages will be evident in the page navigation at the bottom.
- View the recipe with image, cooking time, amount of servings, and ingredients displayed
- For preparation details, it directs user to the source site.
- Bookmark the recipe.
- Unbookmark the recipe.
- Add your own recipe with any number of ingredients, but also atleast one.
- Increase or decrease servings in the recipe display as per your convenience. Recipe will modify accordingly.
- The data is stored in Local Storage. So, data persists even after you close the app.

## Technologies Used

- HTML
- SCSS
- JAVASCRIPT
- NPM
- PARCEL
- NETLIFY

## Limitation

- You can use only a limited number of search queries. Look for them here-
  [Possible search queries](https://forkify-api.herokuapp.com/phrases.html)

---

> This project was guided by [Jonas Schmedtmann](https://github.com/jonasschmedtmann). It is the final project of the Udemy Course- [The Complete JavaScript Course 2022: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course/)
