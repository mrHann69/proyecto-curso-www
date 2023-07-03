import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./login.css";

import LoginService from "../../services/login.service";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLoginMessage, setErrorLoginMessage] = useState(null);
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const respuestaLogin = await LoginService({email,password});
    if(respuestaLogin===null || respuestaLogin===undefined) return{msg: "pailas!"};
    if(Object.keys(respuestaLogin).length===0) {
      setErrorLoginMessage("pailas con el login");
      return;
    }
    const {token, roluser} = respuestaLogin;
    if(['admin','customer','deliveryman'].includes(roluser) && token!==undefined){
      localStorage.removeItem('x_access_token');
      localStorage.setItem('x_access_token', token);
      navigate(`/${roluser}`);
    }
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
