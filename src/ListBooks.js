import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';



function ListBooks (props) {

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
                        bookshelfBooks={props.listedBooks}
                        onChangeBookShelf={(book, shelf) => { props.onChangeBookShelf(book, shelf) }}
                    />
                    <BookShelf
                        bookShelfTitle="Want to Read"
                        currentBookShelf='wantToRead'
                        bookshelfBooks={props.listedBooks}
                        onChangeBookShelf={(book, shelf) => { props.onChangeBookShelf(book, shelf) }}
                    />
                    <BookShelf
                        bookShelfTitle="Read"
                        currentBookShelf='read'
                        bookshelfBooks={props.listedBooks}
                        onChangeBookShelf={(book, shelf) => { props.onChangeBookShelf(book, shelf) }}
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

export default ListBooks;