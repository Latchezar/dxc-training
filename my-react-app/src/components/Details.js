import React from "react";
import BookDetails from "./BookDetails";

class Details extends React.Component {
  render() {
    const books = this.props.books;
    const listItems = books.map(book => (
      <BookDetails bookDetails={book} key={book.id} />
    ));
    return (
      <div>
        <h2>Book search for {this.props.category}</h2>
        <div className="row">{listItems}</div>
      </div>
    );
  }
}

export default Details;
