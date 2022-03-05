import React from "react";
import User from "./User";

const Users = (props) => {
  return (
      
    <div className="general">
      {props.users &&
        props.users.map((user) => <User name={user.name} age={user.age} />)}
    </div>
  );
};

export default Users;
