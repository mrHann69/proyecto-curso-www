import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

import Client from "../client/client.jsx"
import Admin from "../admin/admin.jsx"
import DeliveryMan from "../deliveryMan/deliveryMan.jsx"
import LoginForm from "../login/login.jsx"
import RegisterForm from "../login/register/comp_registro.jsx"
import img from "../../public/default.jpg"
import Dashboard from '../dashboard/dashboard.jsx';
import Orders from '../orders/orders.jsx';
import Reports from '../reports/reports.jsx';
import Management from '../management/management.jsx';
import Product from '../client/products/product.jsx'
import Perfile_DM from '../client/perfiles_DM/perfile_DM.jsx'
import StateProduct from '../client/state_products/stateProduct.jsx'


function Router(token, redirectPath="/login") {
    if(!token){
        return <Navigate to={redirectPath}/>
    }
  return (
      <Routes>
        <Route path="/*" element={<img src={img} alt='' />}></Route>
        <Route path="/login" element={<LoginForm/>}></Route>
        <Route path="" element={<Navigate to={"/login"}/>}></Route>
        <Route path="/register" element={<RegisterForm/>}></Route>
        
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/orders" element={<Orders />}></Route>
        <Route path="/admin/reports" element={<Reports />}></Route>
        <Route path="/admin/management" element={<Management />}></Route>

        <Route path="/client" element={<Client/>}></Route>
        <Route path="/Delivery_Man" element={<Product/>}></Route>
        <Route path="/client/My_Products" element={<Perfile_DM/>}></Route>
        <Route path="/client/In_Way" element={<StateProduct/>}></Route>

        <Route path="/deliveryMan" element={<DeliveryMan/>}></Route>
      </Routes>
  );
}

export default Router;