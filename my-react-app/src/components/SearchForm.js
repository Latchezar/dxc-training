import React from "react";

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: ""
    };
  }

  handleInput = e => {
    this.setState({ inputText: e.target.value });
  };

  render() {
    const action = "/" + this.state.inputText;
    return (
      <form
        className="form-inline my-2 my-lg-0"
        id="search-form"
        action={action}
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={this.handleInput}
          name="search"
          value={this.state.inputText}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
