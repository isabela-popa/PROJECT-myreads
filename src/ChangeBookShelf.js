import React from 'react';



function ChangeBookShelf (props) {
    const { currentBookShelf, onChangeBookShelf, book } = props;

    return (

        <div className="book-shelf-changer">
            <select
                value={currentBookShelf || "none"}
                onChange={(event) => onChangeBookShelf(book, event.target.value)}
            >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>

    )

}

export default ChangeBookShelf;