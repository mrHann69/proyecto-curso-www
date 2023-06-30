import React from "react"
import ButtonAppBar from "../navbar/navbar";
import AdminDiv from "../aux_admin/AdminDiv.jsx"

import TabsOptions from "./tabs.jsx";

import "../aux_admin/AuxAdmin.css"


const Management = () => {
    return( 
        <div>
            <ButtonAppBar/>
            <div id="bdiv">
                <AdminDiv component={ <TabsOptions></TabsOptions>}/>
            </div>
        </div>);
}

export default Management
