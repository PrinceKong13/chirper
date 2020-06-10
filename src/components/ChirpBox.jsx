import React, { Component } from "react";
import Chirp from "./Chirp";
let counter = 4;

class ChirpBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chirpArr: [
        <Chirp key={1} user={{ name: "Will", text: "Hello" }} />,
        <Chirp key={2} user={{ name: "Will", text: "Hello" }} />,
        <Chirp key={3} user={{ name: "Will", text: "Hello" }} />,
      ],
    };
  }

  //Creates a new chirp from user input
  handleClick = (event) => {
    event.preventDefault();
    let userName = document.getElementById("userName");
    let userText = document.getElementById("userText");
    let newArr = this.state.chirpArr;
    let newChirp = (
      <Chirp
        key={counter}
        user={{ name: userName.value, text: userText.value }}
      />
    );
    this.setState({ chirpArr: [...newArr, newChirp] });
    counter++;
    userName.value = null;
    userText.value = null;
  };

  render() {
    return (
      <div>
        {this.state.chirpArr}
        <form>
          <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="userText">Message</label>
            <textarea
              type="text"
              className="form-control"
              id="userText"
              placeholder="Enter Message Here"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(event) => {
              this.handleClick(event);
            }}
          >
            Chirp
          </button>
        </form>
      </div>
    );
  }
}

export default ChirpBox;
