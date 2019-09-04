import React from "react";
import "./App.css";
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
    this.setState({ category: text });
    this.makeFetch(text);
  };

  componentDidMount() {
    this.makeFetch();
  }

  makeFetch() {
    const category = this.state.category;
    console.log("fetching " + category);
    let url = `https://www.googleapis.com/books/v1/volumes?q=${category}`;
    fetch(url)
      .then(response => response.json())
      .then(jsonResponse => this.setState({ books: jsonResponse.items }));
  }

  render() {
    const books = this.state.books;
    return (
      <div className="container">
        <Menu search={this.handleSearch} />
        <Details books={books} />
      </div>
    );
  }
}

export default App;
