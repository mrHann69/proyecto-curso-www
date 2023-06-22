import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

import Client from "../client/client.jsx"
import DeliveryMan from "../deliveryMan/deliveryMan.jsx"
import LoginForm from "../login/login.jsx"
import RegisterForm from "../login/register/comp_registro.jsx"
import img from "../../public/default.jpg"


function Router(token, redirectPath='/login') {
    if(!token){
        return <Navigate to={redirectPath}/>
    }
  return (
      <Routes>
        <Route path="*" element={<img src={img} alt='' />}></Route>
        <Route path="/login" element={<LoginForm/>}></Route>
        <Route path="/register" element={<RegisterForm/>}></Route>
        <Route path="/admin" element={img}></Route>
        <Route path="/client" element={<Client/>}></Route>
        <Route path="/deliveryMan" element={<DeliveryMan/>}></Route>
      </Routes>
  );
}

export default Router;