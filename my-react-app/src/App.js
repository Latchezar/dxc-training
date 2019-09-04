import React from "react";
import "./App.css";
import "./style.css";
import Details from "./components/Details";
import Menu from "./components/Menu";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      category: "JavaScript"
    };
  }

  handleSearch = text => {
    if (text === this.state.category || text === undefined) {
      return;
    }
    this.makeFetch(text);
  };

  componentDidMount() {
    this.makeFetch();
  }

  makeFetch(category = "JavaScript") {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${category}`;
    fetch(url)
      .then(response => response.json())
      .then(jsonResponse =>
        this.setState({ books: jsonResponse.items, category: category })
      );
  }

  render() {
    const books = this.state.books;
    return (
      <div className="container">
        <Menu
          search={this.handleSearch}
          currentCategory={this.state.category}
        />
        <Details books={books} category={this.state.category} />
      </div>
    );
  }
}

export default App;
