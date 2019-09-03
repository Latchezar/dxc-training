import React from "react";
import noimage from "../noimage.png";

class BookDetails extends React.Component {
  render() {
    const book = this.props.bookDetails;
    return (
      <div className="col-sm-3">
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          height="170px"
          width="130px"
          alt={noimage}
        />
        <p className="person-name">Title: {book.volumeInfo.title}</p>
        <ul>
          <li>Publisher: {book.volumeInfo.publisher}</li>
          <li>{book.volumeInfo.pageCount} pages</li>
        </ul>
      </div>
    );
  }
}

export default BookDetails;
