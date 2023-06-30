// import user from "./components/user/network.js";
// import authUser from "./components/auth/network.js";

const user = require('./components/user/network.js');
const authUser = require('./components/auth/network.js');
const product = require('./components/product/network.js');
const deliveryman = require('./components/deliveryman/network.js');
const branchoffice = require('./components/branchoffice/network.js');


const routes = (app)=>{
    app.use('/api/v1', authUser);
    app.use("/api/v1", user);
    app.use("/api/v1", product);
    app.use("/api/v1", deliveryman);
    app.use("/api/v1", branchoffice);
}

// export default routes;
module.exports = routes;