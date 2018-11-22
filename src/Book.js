import React from 'react';
import ChangeBookShelf from './ChangeBookShelf';


class Book extends React.Component {

    render() {
        return (

            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''})`
                    }}>
                    </div>
                    <ChangeBookShelf
                        onChangeBookShelf={(book, shelf) => { this.props.onChangeBookShelf(book, shelf) }}
                        book={this.props.book}
                        currentBookShelf={this.props.currentBookShelf}
                    />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors ? this.props.book.authors.join(', ') : ''}</div>
            </div>

        )
    }
}

export default Book;