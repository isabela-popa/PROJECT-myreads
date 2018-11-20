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

    componentDidMount() {
        BooksAPI.getAll().then(currentBooks => {
            this.setState({ currentBooks })
        })
    }

    changeBookShelf(book, shelf) {
        BooksAPI.update(book, shelf).then(() => {
            this.setState(state => ({
                currentBooks: state.currentBooks.filter(currentBook => currentBook.id !== book.id)
                // .concat([book])
                // currentBooks: [...state.currentBooks.filter(currentBook => currentBook.id !== book.id), book]
            }))
        })
    }

    render() {
        console.log(this.state.currentBooks);
        return (
            <div className="app">
                <Route path='/search' render={() => (
                    <SearchBooks
                        searchedBooks={this.state.currentBooks}
                        onChangeBookShelf={(book, shelf) => { this.changeBookShelf(book, shelf) }}
                    />
                )} />
                <Route exact path='/' render={() => (
                    <ListBooks
                        listedBooks={this.state.currentBooks}
                        onChangeBookShelf={(book, shelf) => { this.changeBookShelf(book, shelf) }}
                    />
                )} />
            </div>
        )
    }
}

export default BooksApp;
