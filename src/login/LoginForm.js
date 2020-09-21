import React from "react";
import { Link, useHistory } from "react-router-dom";
import Deadlines from "../component/Deadlines";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const Credentials = () => {
    return (
      <div style={{ alignContent: "center", flex: 1 }}>
        <p>{JSON.stringify(email)}</p>
        <p>{JSON.stringify(password)}</p>
      </div>
    );
  };

  const handleSubmit = () => {
    console.log("Submitting");
    console.log(JSON.stringify(email));
  };

  return (
    <>
      <Credentials />
      <form onSubmit={() => alert(email)}>
        <label htmlForm="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          value={(x) => setEmail(x)}
        />

        <label htmlForm="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={(x) => setPassword(x)}
        />
        <button name="submit" onClick={() => handleSubmit}>
          submit
        </button>
      </form>
    </>
  );
};
export default LoginForm;
