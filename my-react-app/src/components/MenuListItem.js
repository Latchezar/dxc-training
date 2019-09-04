import React from "react";

class MenuListItem extends React.Component {
  navClick = () => {
    this.props.search(this.props.text);
  };

  render() {
    const shouldBeActive = this.props.isActive;
    if (shouldBeActive) {
      return (
        <li className="nav-link active" onClick={this.navClick}>
          {this.props.text}
        </li>
      );
    } else {
      return (
        <li className="nav-link" onClick={this.navClick}>
          {this.props.text}
        </li>
      );
    }
  }
}

export default MenuListItem;
