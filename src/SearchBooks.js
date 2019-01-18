import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';

class SearchBooks extends React.Component {
    static propTypes = {
        currentBooks: PropTypes.array.isRequired,
        onChangeBookShelf: PropTypes.func.isRequired
    }

    state = {
        searchText: '',
        filteredBooks: []
    }

    updateSearchText = searchText => {
        this.setState({ searchText });
        this.updateFilteredBooks(searchText);
    }

    updateFilteredBooks(searchText) {
        if (searchText) {
            BooksAPI.search(searchText).then(filteredBooks => {
                if (filteredBooks.error) {
                    this.setState({ filteredBooks: [] });
                } else {
                    this.setState({ filteredBooks });
                }
            })
        } else {
            this.setState({ filteredBooks: [] });
        }
    }

    // Prevent the code of trying to change state after component unmounted
    componentWillUnmount() {
        this.updateSearchText('');
    }

    render() {
        const { searchText, filteredBooks } = this.state;
        const { currentBooks, onChangeBookShelf } = this.props;
        // console.log(filteredBooks);
        return (

            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className="close-search"
                        to="/"
                    >Close</Link>

                    <div className="search-books-input-wrapper">
                        <DebounceInput
                            type="text"
                            placeholder="Search by title or author"
                            value={searchText}
                            onChange={(event) => this.updateSearchText(event.target.value)}
                            debounceTimeout={400}
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        {filteredBooks.map(filteredBook => {
                            let bookShelfValue;
                            currentBooks.map(currentBook => (
                                currentBook.id === filteredBook.id ? bookShelfValue = currentBook.shelf : ''
                            ));

                            return (
                                <li key={filteredBook.id} >
                                    <Book
                                        book={filteredBook}
                                        onChangeBookShelf={(book, shelf) => { onChangeBookShelf(book, shelf) }}
                                        currentBookShelf={bookShelfValue}
                                    />
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>

        )
    }
}

export default SearchBooks;