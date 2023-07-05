import { Routes, Route, Navigate } from "react-router-dom";

import Client from "../client/client.jsx";
import Welcome from "../client/welcome.jsx";
import DeliveryManClient from "../client/deliveryman.jsx";
import Admin from "../admin/admin.jsx";
import DeliveryMan from "../deliveryMan/deliveryMan.jsx";
import LoginForm from "../login/login.jsx";
import RegisterForm from "../login/register/comp_registro.jsx";
import img from "../../public/default.jpg";

import Shippings from "../client/shippings.jsx";
import PerfileDM from "../client/profileDm.jsx";

import Orders from "../admin/orders/orders.jsx";
import Reports from "../admin/reports/reports.jsx";
import Management from "../admin/management/management.jsx";

import ErrorPage from "../errorpage/errorpage.jsx";

function Router(token, redirectPath = "/login") {
  if (!token) {
    return <Navigate to={redirectPath} />;
  }
  return (
    <Routes>
      <Route path="/*" element={<ErrorPage />}></Route>
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="" element={<Navigate to={"/login"} />}></Route>
      <Route path="/register" element={<RegisterForm />}></Route>

      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/admin/orders" element={<Orders />}></Route>
      <Route path="/admin/reports" element={<Reports />}></Route>
      <Route path="/admin/management" element={<Management />}></Route>

      <Route path="/client" element={<Client />}>
        <Route path="/client" element={<Welcome />}/>
        <Route path="/client/profile" element={<PerfileDM />}/>
        <Route path="/client/deliveryman" element={<DeliveryManClient />}/>
        <Route path="/client/shippings" element={<Shippings />}/>
      </Route>

      <Route path="/deliveryman" element={<DeliveryMan />}></Route>
      {/* <Route path="/deliveryman" element={<Client/>}></Route>
        <Route path="/deliveryman/deliveryman" element={<PerfileDM/>}></Route>
        <Route path="/deliveryman/myproducts" element={<Product/>}></Route>
        <Route path="/deliveryman/inway" element={<StateProduct/>}></Route> */}
    </Routes>
  );
}

export default Router;
