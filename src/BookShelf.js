import React from 'react';
import Book from './Book';


function BookShelf (props) {

    return (

        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.bookShelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.bookshelfBooks.filter(bookshelfBook =>
                        bookshelfBook.shelf === props.currentBookShelf
                    ).map(bookshelfBook => (
                        <li key={bookshelfBook.id} >
                            <Book
                                book={bookshelfBook}
                                onChangeBookShelf={(book, shelf) => { props.onChangeBookShelf(book, shelf) }}
                                currentBookShelf={props.currentBookShelf}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>

    )

}

export default BookShelf;