import React from 'react';
import { Link } from 'react-router-dom';



class SearchBooks extends React.Component {

    state = {
        searchText: ''
    }

    updateSearchText = (searchText) => {
        this.setState({ searchText: searchText })
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
                            onChange={(event) => this.updateSearchText(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>

        )
    }
}

export default SearchBooks;