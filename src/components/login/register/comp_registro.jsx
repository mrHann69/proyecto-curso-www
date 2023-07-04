import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import "./comp_registro.css";
import RegisterService from "../../../services/resgister.service.js";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");

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

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const form = event.target;
    const dataUser = {
      name,
      email,
      password,
      telephone,
      address,
      role,
    };
    const respuestaRegister = await RegisterService(dataUser);
    let {token, roluser} = respuestaRegister;
    if(['admin','customer','deliveryman'].includes(roluser) && token!==undefined){
      localStorage.removeItem('x_access_token');
      localStorage.setItem('x_access_token', token);
      if(roluser==='customer') roluser='client';
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
// import React, { useState } from "react";
// import "./comp_registro.css";

// const RegisterForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [telephone, setTelephone] = useState("");

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleTelephone = (event) => {
//     setTelephone(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(
//       `Name: ${name} Email: ${email} Telephone: ${telephone} Password: ${password} `
//     );
//   };

//   return (
//     <div className="big-box">
//       <div className="little-box">
//         <h1>Register Form</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Complete name</label>
//             <input
//               type="text"
//               placeholder="Complete name"
//               value={name}
//               onChange={handleNameChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               placeholder="User Email"
//               value={email}
//               onChange={handleEmailChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={handlePasswordChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="telephone">Telephone</label>
//             <input
//               type="telephone"
//               placeholder="Telephone"
//               value={telephone}
//               onChange={handleTelephone}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Address</label>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={handlePasswordChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Role</label>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={handlePasswordChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Role</label>

//           </div>
//           <div className="form-button">
//             <button type="submit">Register</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;
