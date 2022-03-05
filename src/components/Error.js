import React, { userState } from "react";
import "./Error.css";

const Error = (props) => {
  const resetError = () => {
    props.onResetError();
  };
  return (
    <React.Fragment>
      <div className="error">
        <span className="mYspan">{props.error}</span>
        <br />
        <button onClick={resetError} className="myBtn">
          OKAY
        </button>
      </div>
    </React.Fragment>
  );
};

export default Error;
