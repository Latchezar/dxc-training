import React from "react";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }

  handleInput = e => {
    this.setState({ inputText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const searchText = this.state.inputText;
    console.log(searchText);
    this.props.search(searchText);
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand">Book Catalog</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                JavaScript
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Java
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                React
              </a>
            </li>
          </ul>
          <form
            className="form-inline my-2 my-lg-0"
            id="search-form"
            onSubmit={this.handleSubmit}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.handleInput}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Menu;
