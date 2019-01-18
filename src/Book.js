import React from 'react';
import ChangeBookShelf from './ChangeBookShelf';


function Book (props) {

    return (

        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${props.book.imageLinks ? props.book.imageLinks.thumbnail : ''})`
                }}>
                </div>
                <ChangeBookShelf
                    onChangeBookShelf={(book, shelf) => { props.onChangeBookShelf(book, shelf) }}
                    book={props.book}
                    currentBookShelf={props.currentBookShelf}
                />
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors ? props.book.authors.join(', ') : ''}</div>
        </div>

    )

}

export default Book;