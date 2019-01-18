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

    // Update search text state, as the user types into the search field to find books.
    updateSearchText = searchText => {
        this.setState({ searchText });
        this.updateFilteredBooks(searchText);
    }

    // As the value of the text input changes, the books that match that query are displayed on the page.
    // When the queries are invalid or all of the text is deleted out of the search input box, search results are not shown.
    updateFilteredBooks(searchText) {
        if (searchText) {
            BooksAPI.search(searchText).then(filteredBooks => {
                // Handle invalid search text
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
                        {/* Use debounce for search input text */}
                        <DebounceInput
                            type="text"
                            placeholder="Search by title or author"
                            value={searchText}
                            onChange={(event) => this.updateSearchText(event.target.value)}
                            debounceTimeout={300}
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        {filteredBooks.map(filteredBook => {
                            /* Set the same state for books on search page as it is on the main page */
                            let bookShelfValue;
                            currentBooks.map(currentBook => (
                                currentBook.id === filteredBook.id ? bookShelfValue = currentBook.shelf : ''
                            ));

                            return (
                                /* List the filtered books */
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