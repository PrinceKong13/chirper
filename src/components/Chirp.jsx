import React from "react";

const Chirp = (props) => {
  return (
    <div className="card m-3">
      <div className="card-header">{props.user.name}</div>
      <div className="card-body">
        <p className="card-text">{props.user.text}</p>
        <button type="button" className="btn btn-primary">Admin</button>
      </div>
    </div>
  );
};

export default Chirp;
