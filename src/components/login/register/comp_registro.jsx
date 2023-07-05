import React, { useState } from "react";
import {useNavigate, redirect } from "react-router-dom";
import "./comp_registro.css";
import RegisterService from "../../../services/resgister.service.js";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [roleuser, setRoleuser] = useState("");

  const navigate = useNavigate();


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
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRoleuser(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataUser = {
      name,
      password,
      city,
      address,
      email,
      telephone,
      roluser:roleuser
    };
    const respuestaRegister = await RegisterService(dataUser);
    if(respuestaRegister===undefined) return new Error("respuesta Register vacia")
    let {x_access_token:token} = respuestaRegister;
    let {roluser} = respuestaRegister?.user;
    if(['admin','customer','deliveryman'].includes(roluser) && token!==undefined){
      localStorage.removeItem('x_access_token');
      localStorage.setItem('x_access_token', token);
      if(roluser==='customer') roluser='client';
      console.log("rol",roluser);
      
      navigate(`/${roluser}`);
    }
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
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
            <label htmlFor="city">City</label>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={handleCityChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={handleAddressChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Role</label>
            <input
              it="customer-radio"
              type="radio"
              name="opcion"
              value="customer"
              onChange={handleRoleChange}
            />
            <label htmlFor="customer-radio">Customer</label>

            <input
              it="deliveryman-radio"
              type="radio"
              name="opcion"
              value="deliveryman"
              onChange={handleRoleChange}
            />
            <label htmlFor="deliveryman-radio">Deliveryman</label>
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
