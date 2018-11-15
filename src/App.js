import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {

    state = {
        currentBooks: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(currentBooks => {
            this.setState({ currentBooks })
        })
    }

    render() {
        console.log(this.state.currentBooks);
        return (
            <div className="app">
                <Route path='/search' render={() => (
                    <SearchBooks  />
                )} />
                <Route exact path='/' render={() => (
                    <ListBooks listedBooks={this.state.currentBooks} />
                )} />
            </div>
        )
    }
}

export default BooksApp;
