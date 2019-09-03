import React from "react";
import BookDetails from "./BookDetails";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchText: "",
      titleText: ""
    };
  }

  update(books) {
    this.setState({
      books: books
    });
  }

  componentDidMount() {
    this.makeFetch();
  }

  makeFetch(category = "JavaScript") {
    this.setState({ titleText: category });
    let url = `https://www.googleapis.com/books/v1/volumes?q=${category}`;
    fetch(url)
      .then(response => response.json())
      .then(jsonResponse => this.update(jsonResponse.items));
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    this.makeFetch(this.state.searchText);
    this.setState({ searchText: "" });
  };

  inputChange = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  render() {
    const books = this.state.books;
    const listItems = books.map(book => (
      <BookDetails bookDetails={book} key={book.id} />
    ));
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.inputChange}
            value={this.state.searchText}
          />
          <button type="submit">Search</button>
        </form>
        <h2>Book search for {this.state.titleText}</h2>
        <div className="row">{listItems}</div>
      </div>
    );
  }
}

export default Details;
