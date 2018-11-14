import React from 'react';
import Book from './Book';


class BookShelf extends React.Component {

    render() {
        return (

            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.bookShelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.currentBooks.filter(currentBook =>
                            currentBook.shelf === this.props.currentBookShelf
                        ).map(currentBook => (
                            <li key={currentBook.id} >
                                <Book currentBook={currentBook} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

        )
    }
}

export default BookShelf;