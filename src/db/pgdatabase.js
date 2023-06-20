import { Sequelize } from 'sequelize';
import config from "../config/config.js";

const { POSTGRES_URI, POSTGRES_URI_DOCKER, POSTGRES_USERNAME, POSTGRES_HOST, POSTGRES_DATABASE, POSTGRES_PASSWORD } = config;

const options = {
  host: "db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
} 
const sequelize = new Sequelize(POSTGRES_URI_DOCKER, options);

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


export default sequelize;