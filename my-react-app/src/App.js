import React from "react";
import "./App.css";
import "./style.css";
import Details from "./components/Details";
import Menu from "./components/Menu";
import Book from "./components/Book";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      category: ""
    };
  }

  handleSearch = text => {
    if (text === this.state.category || text === undefined) {
      return;
    }
    this.makeFetch(text);
  };

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
      <BrowserRouter>
        <div className="container">
          <Menu
            search={this.handleSearch}
            currentCategory={this.state.category}
          />
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <Details
                  {...props}
                  books={books}
                  category={this.state.category}
                  search={this.handleSearch}
                />
              )}
            />
            <Route
              path="/:category"
              exact
              render={props => (
                <Details
                  {...props}
                  books={books}
                  category={this.state.category}
                  search={this.handleSearch}
                />
              )}
            />
            <Route
              path="/book/:bookUrl"
              render={props => <Book {...props} books={books} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
