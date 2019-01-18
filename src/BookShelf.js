import React from 'react';
import Book from './Book';


function BookShelf (props) {
    const { onChangeBookShelf, bookShelfTitle, bookshelfBooks, currentBookShelf } = props;

    return (

        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookShelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
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

export default BookShelf;