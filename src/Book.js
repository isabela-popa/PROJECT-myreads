import React from 'react';
import ChangeBookShelf from './ChangeBookShelf';
import PropTypes from 'prop-types';


function Book (props) {
    const { onChangeBookShelf, book, currentBookShelf } = props;

    return (

        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    /* Handle missing book thumbnail */
                    backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`
                }}>
                </div>
                <ChangeBookShelf
                    onChangeBookShelf={(book, shelf) => { onChangeBookShelf(book, shelf) }}
                    book={book}
                    currentBookShelf={currentBookShelf}
                />
            </div>
            <div className="book-title">{book.title}</div>
            {/* Handle missing book author */}
            <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
        </div>

    )

}

Book.propTypes = {
    onChangeBookShelf: PropTypes.func.isRequired
};

export default Book;