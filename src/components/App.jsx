import React, { Component } from "react";
import ChirpBox from "./ChirpBox";
import Navbar from "./Navbar";
import UserInput from "./UserInput";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUserName: "",
      newUserMessage: "",
      chirps: [
        {
          name: "Will",
          message: "Hello",
        },
        {
          name: "Not Will",
          message: "Not Hello",
        },
        {
          name: "Maybe Will",
          message: "Maybe Hello",
        },
      ],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleUserMessage = this.handleUserMessage.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let newChirp = {
      name: this.state.newUserName,
      message: this.state.newUserMessage,
    };
    this.setState({ chirps: [...this.state.chirps, newChirp] });
  }

  handleUserName(e) {
    this.setState({ newUserName: e.target.value });
  }

  handleUserMessage(e) {
    this.setState({ newUserMessage: e.target.value });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <ChirpBox chirps={this.state.chirps} />
          <UserInput
            handleUserMessage={this.handleUserMessage}
            handleUserName={this.handleUserName}
            handleClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
