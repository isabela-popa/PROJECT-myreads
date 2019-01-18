import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


function BookShelf (props) {
    const { onChangeBookShelf, bookShelfTitle, bookshelfBooks, currentBookShelf } = props;

    return (

        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookShelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {/* List each book on the correct shelf */}
                    {bookshelfBooks.filter(bookshelfBook =>
                        bookshelfBook.shelf === currentBookShelf
                    ).map(bookshelfBook => (
                        <li key={bookshelfBook.id} >
                            <Book
                                book={bookshelfBook}
                                onChangeBookShelf={(book, shelf) => { onChangeBookShelf(book, shelf) }}
                                currentBookShelf={currentBookShelf}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>

    )

}

BookShelf.propTypes = {
    currentBookShelf: PropTypes.string.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
    bookshelfBooks: PropTypes.array.isRequired,
    bookShelfTitle: PropTypes.string.isRequired
};

export default BookShelf;