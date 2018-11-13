import React from 'react';
import ChangeBookShelf from './ChangeBookShelf';


class Book extends React.Component {

    render() {
        return (

            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.currentBook.imageLinks.thumbnail})` }}></div>
                    <ChangeBookShelf />
                </div>
                <div className="book-title">{this.props.currentBook.title}</div>
                <div className="book-authors">{this.props.currentBook.authors}</div>
            </div>

        )
    }
}

export default Book;