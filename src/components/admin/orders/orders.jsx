import React from "react"
import ButtonAppBar from "../../navbar/navbar";
import DataTable from "./ordersList/ordersList";

import AdminDiv from "../aux_admin/AdminDiv.jsx"

import "../aux_admin/AuxAdmin.css"

const Orders = () => {
    return(
        <div>
            <ButtonAppBar/>
            <div id="bdiv">
                <AdminDiv component={ <a><DataTable/></a>}/>
            </div>
        </div>);
}

export default Orders
