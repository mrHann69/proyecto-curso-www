import ButtonAppBar from "../navbar/navbar";
//import TemporaryDrawer from "../sidebar/sidebar";
import AdminDiv from "../aux_admin/AdminDiv.jsx"
import "../aux_admin/AuxAdmin.css"

function Admin() {
    return( 
        <div>
            <ButtonAppBar/>
            <div id="bdiv">
                <AdminDiv component={ <a>hola</a>}/>
            </div>
        </div>);
}

export default Admin
