import React from "react";
import noimage from "../noimage.png";

class BookNoFetch extends React.Component {
  render() {
    const books = this.props.books;
    const id = this.props.match.params.bookUrl;
    const book = books.filter(b => b.id === id)[0];
    console.log(book);
    if (book === undefined) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-md-6">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={noimage} />
          </div>
          <div className="col-md-6">
            <p>Title: {book.volumeInfo.title}</p>
            <p>Pages: {book.volumeInfo.pageCount}</p>
          </div>
        </div>
      );
    }
  }
}

export default BookNoFetch;
