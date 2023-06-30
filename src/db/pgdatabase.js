// import { Sequelize } from 'sequelize';
// import config from "../config/config.js";
// import setupModels from './setupModels.js';

const { Sequelize } = require('sequelize');
const config = require('../config/config.js');
const setupModels = require('./setupModels.js');

const { POSTGRES_URI_DOCKER,POSTGRES_URI } = config;

const options = {
  host: "db",
  dialect: "postgres",
} 
const sequelize = new Sequelize(POSTGRES_URI_DOCKER, options);
// const sequelize = new Sequelize(POSTGRES_URI, options);

setupModels(sequelize);


// const testConnection = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }


// export default sequelize;
module.exports = sequelize
// module.exports =testConnection