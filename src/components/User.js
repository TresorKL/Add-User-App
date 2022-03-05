import React from "react";
import "./User.css";

const User = (props) => {
  return (
    <div>
      <div className="user">
        <h3>
          {props.name} ({props.age} years old)
        </h3>
      </div>
    </div>
  );
};

export default User;
