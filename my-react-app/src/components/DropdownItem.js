import React from "react";

class DropdownItem extends React.Component {
  render() {
    const currentCategory = this.props.currentCategory;
    const url = "/" + this.props.item.name;
    if (currentCategory === this.props.item.name) {
      return (
        <a className="dropdown-item active" href={url}>
          {this.props.item.name}
        </a>
      );
    } else {
      return (
        <a className="dropdown-item" href={url}>
          {this.props.item.name}
        </a>
      );
    }
  }
}

export default DropdownItem;
