import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends React.Component {

    state = {
        searchText: '',
        filteredBooks: []
    }

    updateSearchText = searchText => this.setState({ searchText })

    updateFilteredBooks = searchText => {
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

    searchBooks = searchText => {
        this.updateSearchText(searchText);
        this.updateFilteredBooks(searchText);
    }

    render() {

        return (

            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className="close-search"
                        to="/"
                    >Close</Link>
                    <div className="search-books-input-wrapper">

                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.searchText}
                            onChange={(event) => this.searchBooks(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.filteredBooks.map(filteredBook => (
                            <li key={filteredBook.id} >
                                <Book book={filteredBook} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

        )
    }
}

export default SearchBooks;