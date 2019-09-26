import React from "react";
import { Link } from "react-router-dom";
import DropdownItem from "./DropdownItem";

class MenuListItem extends React.Component {
  navClick = () => {
    this.props.search(this.props.text);
  };

  render() {
    const subcategories = this.props.subcategories.map(item => {
      return (
        <DropdownItem
          item={item}
          key={item.id}
          currentCategory={this.props.currentCategory}
        />
      );
    });

    return (
      <li className="nav-item dropdown">
        <span
          className="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {this.props.text}
        </span>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {subcategories}
        </div>
      </li>
    );
  }
}

export default MenuListItem;
