import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import Error from "./components/Error";
const INITIAL = [{}];
function App() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");

  const newUserHandler = (newUser) => {
    if (newUser.name == "" || newUser.age == "") {
      setError("INVALID USER INPUT:FILL ALL THE INPUT SECTION");
    } else if (newUser.age <= 0) {
      setError("INVALID USER INPUT:AGE CAN'T BE <= 0");
    } else {
      setUser([newUser, ...user]);
      console.log(user);
    }
  };
  const resetErrorMsg = () => {
    setError("");
  };
  return (
    <React.Fragment>
      {error && <Error error={error} onResetError={resetErrorMsg} />}
      <AddUser onAddUser={newUserHandler} />
      <Users users={user} />
    </React.Fragment>
  );
}

export default App;
