import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {

    state = {
        currentBooks: []
    }

    // Use BooksAPI to fetch remote books
    getCurrentBooks() {
        BooksAPI.getAll().then(currentBooks => {
            this.setState({ currentBooks });
        });
    }

    // Wait until the component mounts, in order to populate the currentBooks array
    componentDidMount() {
        this.getCurrentBooks();
    }

    // Select a new bookshelf for a book,
    // take out the book with the old bookshelf from the currentBooks array and
    // add back the book with the new shelf
    changeBookShelf(book, shelf) {
        BooksAPI.update(book, shelf).then(() => {
            book.shelf = shelf;
            // this.getCurrentBooks();
            this.setState(state => ({
                // currentBooks: state.currentBooks.filter(currentBook => currentBook.id !== book.id).concat([book])
                currentBooks: [...state.currentBooks.filter(currentBook => currentBook.id !== book.id), book]
            }))
        });
    }

    render() {
        const { currentBooks } = this.state;
        // console.log(currentBooks);
        return (
            <div className="app">
                <Route path='/search' render={() => (
                    <SearchBooks
                        currentBooks={currentBooks}
                        onChangeBookShelf={(book, shelf) => { this.changeBookShelf(book, shelf) }}
                    />
                )} />
                <Route exact path='/' render={() => (
                    <ListBooks
                        listedBooks={currentBooks}
                        onChangeBookShelf={(book, shelf) => { this.changeBookShelf(book, shelf) }}
                    />
                )} />
            </div>
        )
    }
}

export default BooksApp;
