import React, { useState } from "react";
import "./comp_registro.css"

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTelephone = (event) => {
    setTelephone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name} Email: ${email} Telephone: ${telephone} Password: ${password} `);
  };

  return (
    <div className="big-box">
      <div className="little-box">
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Complete name</label>
        <input
          type="text"
          placeholder="Complete name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="User Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="telephone">Telephone</label>
        <input
          type="telephone"
          placeholder="Telephone"
          value={telephone}
          onChange={handleTelephone}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div className="form-button">
        <button type="submit">Register</button>
      </div>
    </form>
      </div>
    </div>
    
  );
};

export default RegisterForm;