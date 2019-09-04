import React from "react";
import noimage from "../noimage.png";

class BookDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      toogle: false
    };
  }

  activateToogle = () => {
    const currentState = this.state.toogle;
    if (currentState) {
      this.setState({ toogle: false });
    } else {
      this.setState({ toogle: true });
    }
  };

  render() {
    const book = this.props.bookDetails;
    if (this.state.toogle) {
      return (
        <div className="col-sm-3">
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            height="170px"
            width="130px"
            alt={noimage}
          />
          <p className="person-name" onClick={this.activateToogle}>
            Title: {book.volumeInfo.title}
          </p>
          <ul>
            <li>Publisher: {book.volumeInfo.publisher}</li>
            <li>{book.volumeInfo.pageCount} pages</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="col-sm-3">
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            height="170px"
            width="130px"
            alt={noimage}
          />
          <p className="person-name" onClick={this.activateToogle}>
            Title: {book.volumeInfo.title}
          </p>
        </div>
      );
    }
  }
}

export default BookDetails;
