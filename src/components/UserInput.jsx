import React from "react";

const UserInput = (props) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          className="form-control"
          id="userName"
          placeholder="Enter Name"
          onChange={props.handleUserName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="userText">Message</label>
        <textarea
          type="text"
          className="form-control"
          id="userText"
          placeholder="Enter Message"
          onChange={props.handleUserMessage}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={props.handleClick}
      >
        Chirp
      </button>
    </>
  );
};

export default UserInput;
