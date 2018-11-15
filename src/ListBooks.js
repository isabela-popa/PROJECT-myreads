import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';



class ListBooks extends React.Component {

    render() {
        return (

            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf bookShelfTitle="Currently Reading" currentBookShelf='currentlyReading' bookshelfBook={this.props.listedBooks} />
                        <BookShelf bookShelfTitle="Want to Read" currentBookShelf='wantToRead' bookshelfBook={this.props.listedBooks} />
                        <BookShelf bookShelfTitle="Read" currentBookShelf='read' bookshelfBook={this.props.listedBooks} />
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
}

export default ListBooks;