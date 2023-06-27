import user from "./components/user/network.js";
import authUser from "./components/auth/network.js";


const routes = (app)=>{
    app.use('/api/v1', authUser);
    app.use("/api/v1", user);
}

export default routes;