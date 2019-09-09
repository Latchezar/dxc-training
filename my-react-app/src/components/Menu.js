import React from "react";
import SearchForm from "./SearchForm";
import MenuListItem from "./MenuListItem";

class Menu extends React.Component {
  handleSearch = text => {
    this.props.search(text);
  };

  render() {
    const listItemsText = [
      { name: "JavaScript", categoryId: 1 },
      { name: "Java", categoryId: 2 },
      { name: "React", categoryId: 3 },
      { name: "Web", categoryId: 4 },
      { name: "C++", categoryId: 5 },
      { name: "Angular", categoryId: 6 }
    ];
    const currentCategory = this.props.currentCategory;
    const actualListItems = listItemsText.map(item => {
      const category = "/" + item.name;
      if (currentCategory === item.name) {
        return (
          <MenuListItem
            text={item.name}
            isActive={true}
            key={item.categoryId}
            url={category}
          />
        );
      } else {
        return (
          <MenuListItem
            text={item.name}
            isActive={false}
            key={item.categoryId}
            url={category}
          />
        );
      }
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
