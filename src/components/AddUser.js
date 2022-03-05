import React, { useState, event } from "react";
import Card from "./containers/Card";

import "./AddUser.css";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const getName = (event) => {
    setName(event.target.value);
  };
  const getAge = (event) => {
    setAge(event.target.value);
  };
  const getData = (event) => {
    event.preventDefault();
    const user = {
      name: name,
      age: age,
    };
    props.onAddUser(user);
    setName("");
    setAge("");
  };

  return (
    <Card className="card">
      <form onSubmit={getData}>
        <label>Enter Name</label>
        <input type="text" onChange={getName} value={name} />
        <label>AGE</label>
        <input type="number" onChange={getAge} value={age} />
        <button className="button" type="submit">
          ADD
        </button>
      </form>
    </Card>
  );
};

export default AddUser;
