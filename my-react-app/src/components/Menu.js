import React from "react";
import SearchForm from "./SearchForm";
import MenuListItem from "./MenuListItem";

class Menu extends React.Component {
  handleSearch = text => {
    this.props.search(text);
  };

  render() {
    const listItemsText = ["JavaScript", "Java", "React"];
    const currentCategory = this.props.currentCategory;
    const actualListItems = listItemsText.map(item => {
      if (currentCategory === item) {
        return (
          <MenuListItem
            text={item}
            search={this.handleSearch}
            isActive={true}
          />
        );
      } else {
        return (
          <MenuListItem
            text={item}
            search={this.handleSearch}
            isActive={false}
          />
        );
      }
    });
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
          <ul className="navbar-nav mr-auto">{actualListItems}</ul>
          <SearchForm search={this.handleSearch} />
        </div>
      </nav>
    );
  }
}

export default Menu;
