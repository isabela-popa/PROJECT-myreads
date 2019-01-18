import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';


function ListBooks(props) {
    const { listedBooks, onChangeBookShelf } = props;

    return (

        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf
                        bookShelfTitle="Currently Reading"
                        currentBookShelf='currentlyReading'
                        bookshelfBooks={listedBooks}
                        onChangeBookShelf={(book, shelf) => { onChangeBookShelf(book, shelf) }}
                    />
                    <BookShelf
                        bookShelfTitle="Want to Read"
                        currentBookShelf='wantToRead'
                        bookshelfBooks={listedBooks}
                        onChangeBookShelf={(book, shelf) => { onChangeBookShelf(book, shelf) }}
                    />
                    <BookShelf
                        bookShelfTitle="Read"
                        currentBookShelf='read'
                        bookshelfBooks={listedBooks}
                        onChangeBookShelf={(book, shelf) => { onChangeBookShelf(book, shelf) }}
                    />
                </div>
            </div>
            <div className="open-search">
                <Link
                    to="/search"
                >Add a book</Link>
            </div>
        </div>

    )

}

ListBooks.propTypes = {
    onChangeBookShelf: PropTypes.func.isRequired,
    listedBooks: PropTypes.array.isRequired
};

export default ListBooks;