import React from 'react';
import Book from './Book';


class BookShelf extends React.Component {

    render() {
        return (

            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.bookShelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.bookshelfBooks.filter(bookshelfBook =>
                            bookshelfBook.shelf === this.props.currentBookShelf
                        ).map(bookshelfBook => (
                            <li key={bookshelfBook.id} >
                                <Book book={bookshelfBook} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

        )
    }
}

export default BookShelf;