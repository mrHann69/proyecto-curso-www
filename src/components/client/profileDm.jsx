
import { Navigate } from "react-router-dom";

import { useState, useEffect } from "react";
import {GetInfoUser, UpdateInfoUser} from "../../services/clientinfo.service.js";


function PerfileDM() {
  const [idUser, setIdUser] = useState(null);
  const [nameUser, setName] = useState("");
  const [emailUser, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [telephoneUser, setTelephone] = useState("");
  const [cityUser, setCity] = useState("");
  const [addressUser, setAddress] = useState("");
  const [roleuserUser, setRoleuser] = useState("");

  const [dataUser, setDataUser] = useState(null);

  const token = localStorage.getItem("x_access_token");



  useEffect(() => {

    if (dataUser === null || dataUser === undefined){
      let tmp = GetInfoUser(token).then((response)=> setDataUser(response));
      setDataUser( tmp );
      return;
    }

    const { id, name, email, telephone, city, address, roluser } = dataUser;
    setIdUser(id)
    setName(name);
    setEmail(email);
    setTelephone(telephone);
    setCity(city);
    setAddress(address);
    setRoleuser(roluser);
    
  }, [dataUser,token]);


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  const handleTelephone = (event) => {
    setTelephone(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  // const handleRoleChange = (event) => {
  //   setRoleuser(event.target.value);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newDataUser = {
      name: nameUser,
      email: emailUser,
      telephone: telephoneUser,
      city: cityUser,
      address: addressUser,
      roluser: roleuserUser,
    };
    await UpdateInfoUser(idUser, newDataUser, token).then(response => response);
    window.location.reload();
  };

  return (
    <div>
      <>
        <h1>Show available delivery man</h1>
        <div>Contenido de la pagina de delivery man</div>
        <span> → {dataUser?.name}</span>
      </>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Complete name</label>
            <input
              type="text"
              placeholder="Complete name"
              value={nameUser}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="User Email"
              value={emailUser}
              onChange={handleEmailChange}
              required
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div> */}
          <div className="form-group">
            <label htmlFor="telephone">Telephone</label>
            <input
              type="telephone"
              placeholder="Telephone"
              value={telephoneUser}
              onChange={handleTelephone}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              placeholder="City"
              value={cityUser}
              onChange={handleCityChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              placeholder="Address"
              value={addressUser}
              onChange={handleAddressChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="roluser">Role</label>
            <input
              type="text"
              placeholder="Role of user"
              value={roleuserUser}
              disabled={true}
            />
          </div>
          <div className="form-button">
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PerfileDM;
