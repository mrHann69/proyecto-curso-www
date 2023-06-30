// import config from "../config/config.js";
const config = require('../config/config.js');

// const URI = config.POSTGRES_URI_DOCKER;
const URI = config.POSTGRES_URI;

// export default {
module.exports = {
  development: {
    url: URI,
    dialect: 'postgres'
  }
};