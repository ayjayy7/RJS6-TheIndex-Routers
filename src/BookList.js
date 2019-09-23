import React, { Component } from "react";

import BookTable from "./BookTable";
import SearchBar from "./SearchBar";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books,
    filteredByColor: this.props.books
  };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      `${book.title}`.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  filterByColor(color) {
    return this.state.filteredBooks.filter(book => {
      return `${book.color}` === color;
    });
  }

  render() {
    let books = this.state.filteredBooks;
    if (this.props.match.params.color) {
      books = this.filterByColor(this.props.match.params.color);
    }

    return (
      <div className="authors">
        <h3>Books</h3>
        <SearchBar onChange={this.filterBooks} />

        <div className="row">
          <BookTable books={books} />
        </div>
      </div>
    );
  }
}

export default BookList;
