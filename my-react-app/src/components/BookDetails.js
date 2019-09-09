import React from "react";
import noimage from "../noimage.png";
import { Link } from "react-router-dom";

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
    const link = "/book/" + book.id;
    try {
      if (this.state.toogle) {
        return (
          <div className="col-sm-3">
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              height="170px"
              width="130px"
              alt={noimage}
            />
            <Link to={link}>
              <p className="person-name" onClick={this.activateToogle}>
                Title: {book.volumeInfo.title}
              </p>
            </Link>
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
            <Link to={link}>
              <p className="person-name" onClick={this.activateToogle}>
                Title: {book.volumeInfo.title}
              </p>
            </Link>
          </div>
        );
      }
    } catch (error) {
      console.log(error);
      if (this.state.toogle) {
        return (
          <div className="col-sm-3">
            <img src={noimage} height="170px" width="130px" alt={noimage} />
            <Link to={link}>
              <p className="person-name" onClick={this.activateToogle}>
                Title: {book.volumeInfo.title}
              </p>
            </Link>
            <ul>
              <li>Publisher: {book.volumeInfo.publisher}</li>
              <li>{book.volumeInfo.pageCount} pages</li>
            </ul>
          </div>
        );
      } else {
        return (
          <div className="col-sm-3">
            <img src={noimage} height="170px" width="130px" alt={noimage} />
            <Link to={link}>
              <p className="person-name" onClick={this.activateToogle}>
                Title: {book.volumeInfo.title}
              </p>
            </Link>
          </div>
        );
      }
    }
  }
}

export default BookDetails;
