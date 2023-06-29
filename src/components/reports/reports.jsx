import React from "react"
import ButtonAppBar from "../navbar/navbar";

import AdminDiv from "../aux_admin/AdminDiv.jsx"
import "../aux_admin/AuxAdmin.css"

const Reports = () => {
    return( 
        <div>
            <ButtonAppBar/>
            <div id="bdiv">
                <AdminDiv component={ <a>hola</a>}/>
            </div>
        </div>);
}

export default Reports;
