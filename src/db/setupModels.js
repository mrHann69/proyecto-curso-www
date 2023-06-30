// import { ProductSchema, Product } from '../components/product/model.js';
// import { UsersSchema, Users } from '../components/user/model.js';
// import { BranchOfficeSchema, BranchOffice } from '../components/branchoffice/model.js';
// import { Deliveryman, DeliverymanSchema } from '../components/deliveryman/model.js';
// import { Service, ServiceSchema } from '../components/service/model.js';

const { ProductSchema, Product } = require('../components/product/model.js');
const { UsersSchema, Users } = require('../components/user/model.js');
const { BranchOfficeSchema, BranchOffice } = require('../components/branchoffice/model.js');
const { Deliveryman, DeliverymanSchema } = require('../components/deliveryman/model.js');
const { Service, ServiceSchema } = require('../components/service/model.js');

function setupModels(sequelize) {
    // init models
    Users.init(UsersSchema, Users.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    BranchOffice.init(BranchOfficeSchema, BranchOffice.config(sequelize));
    Deliveryman.init(DeliverymanSchema, Deliveryman.config(sequelize));
    Service.init(ServiceSchema, Service.config(sequelize));


    Users.associate(sequelize.models);
    Product.associate(sequelize.models);
    BranchOffice.associate(sequelize.models);
    Deliveryman.associate(sequelize.models);
    Service.associate(sequelize.models);
}

// export default setupModels;
module.exports = setupModels;