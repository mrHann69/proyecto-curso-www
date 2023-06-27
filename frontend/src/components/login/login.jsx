import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLoginMessage, setErrorLoginMessage] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
  };

  return (
    <div className="big-box-1">
      <div className="little-box-1">
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          {errorLoginMessage ? (
            <div className="errorLogin-1">{errorLoginMessage}</div>
          ) : null}
          <div className="form-button-1">
            <button type="submit">Log in</button>
          </div>
          <div className="register">
            <ul>
              <Link to="/register">Would you like to register?</Link>
            </ul>
          </div>
        </form>
      </div>
      <Outlet />
    </div>
  );
};

export default LoginForm;
