import { ProductSchema, Product } from '../components/product/model.js';
import { UsersSchema, Users } from '../components/product/model.js';

function setupModels(sequelize) {
    // init models
    Users.init(UsersSchema, Users.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    
    Users.associate(sequelize.models);
    Product.associate(sequelize.models);
}

export default setupModels;