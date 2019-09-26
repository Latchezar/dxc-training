import React from "react";
import SearchForm from "./SearchForm";
import MenuListItem from "./MenuListItem";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  handleSearch = text => {
    this.props.search(text);
  };

  fetchCategories() {
    fetch("http://localhost:15350/api/category/all")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ categories: responseJson });
      });
  }

  componentDidMount() {
    this.fetchCategories();
  }

  render() {
    const listItemsText = this.state.categories;
    const currentCategory = this.props.currentCategory;
    const actualListItems = listItemsText.map(item => {
      const category = "/" + item.name;
      return (
        <MenuListItem
          text={item.name}
          currentCategory={currentCategory}
          key={item.id}
          subcategories={item.subCategories}
          url={category}
        />
      );
    });
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <span className="navbar-brand">Book Catalog</span>
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
