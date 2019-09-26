import React from "react";
import BookDetails from "./BookDetails";
import Loading from "./Loading";

class Details extends React.Component {
  componentDidMount() {
    const category = this.props.match.params.category;
    if (category === undefined) {
      this.props.search("JavaScript");
    } else {
      this.props.search(category);
    }
  }
  render() {
    const category = this.props.match.params.category;
    const books = this.props.books;
    const listItems = books.map(book => (
      <BookDetails bookDetails={book} key={book.id} />
    ));
    if (category !== undefined) {
      if (listItems.length === 0) {
        return (
          <div>
            <h2>Book search for {this.props.match.params.category}</h2>
            <Loading />
          </div>
        );
      } else {
        return (
          <div>
            <h2>Book search for {this.props.match.params.category}</h2>
            <div className="row">{listItems}</div>
          </div>
        );
      }
    } else {
      if (listItems.length === 0) {
        return (
          <div>
            <h2>Book search for {this.props.match.params.category}</h2>
            <Loading />
          </div>
        );
      } else {
        return (
          <div>
            <h2>Book search for JavaScript</h2>
            <div className="row">{listItems}</div>
          </div>
        );
      }
    }
  }
}

export default Details;
