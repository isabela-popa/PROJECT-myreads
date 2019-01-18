# MyReads Project

In the `MyReads project`, I have created a bookshelf app that allows users to select and categorize books they have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that users use to persist information as they interact with the application.

I was provided with a `starter repository` for the MyReads project for `Udacity's Front-End Web Developer Nanodrgree Program`. The code in the starter repo contained a static example of all the CSS and HTML markup that may have been used, but without any of the React code that was required to complete the project. The provided code demonstrated a static HTML page of the finished application, but with no interactive functionality. My job was to add interactivity to the app by refactoring the static code in this template.

In the `"src" folder` you can find the `"App.js" file`, which is the root of the app and it contained static HTML at the begining. I used React to create new JS files for each component and used import/require statements to include them where they are needed.

## App Functionality

In this application, namely MyReads App, the homepage named `main page` displays a list of "shelves", each of which contains a number of books. The three shelves are named:
* `Currently Reading`
* `Want to Read`
* `Read`

Each book has a `green circle` in the bottom right-hand corner, which is a `control` that lets you select the shelf for that book. When you select a different shelf, the book moves there. The default value for the control is always the current shelf the book is in.

When the `green circle` in the right-hand corner of the book is clicked, you see a menu that has the following options: `"Move To," "Currently Reading," "Want to Read," Read,"` and `"None."`

The main page of the app also has a `green plus sign icon` in the bottom right-hand corner, representing a link to a `search page` that allows you to find books to add to your library.

The `search page` has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

When a book is on a bookshelf, that bookshelf is selected on both the main application page and the search page.

The search page also has a link, which leads back to the main page.

When you navigate back to the main page from the search page, you instantly see all of the selections you made on the search page in your library.

## How to run

To get started using the app:

* save this project to you computer, using the `Clone or download` button found in the upper right-hand side of this project's page,
* in the terminal, cd into the `project's folder` on your computer,
* install all project dependencies with `npm install` and
* start the development server with `npm start`.

After that, the project should load automatically in your browser at http://localhost:3000/.

## Backend Server

Udacity has provided a backend server and the [`BooksAPI.js`](src/BooksAPI.js) file contains the methods needed to perform necessary operations on the backend: `getAll`, `update`, `search`.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

