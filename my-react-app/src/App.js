import React from "react";
import "./App.css";
import Details from "./components/Details";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div>Hello World!</div>
        <Details />
      </div>
    );
  }
}

export default App;
