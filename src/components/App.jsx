import React, { Component } from "react";
import ChirpBox from "./ChirpBox";
import Navbar from "./Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: "Some Text",
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <ChirpBox />
        </div>
      </div>
    );
  }
}

export default App;
