import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { action1 } from "../store/index";
import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch();
  const submit = function (e) {
    e.preventDefault();
    dispatch(action1.login());
  };
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={submit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
