// import { DataTypes } from 'sequelize';
// import sequelize from "../../db/pgdatabase.js";

const { DataTypes } = require('sequelize');
const sequelize = require( "../../db/pgdatabase.js");

const ServiceShipping= sequelize.define('ServiceShipping', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateChange: {
    type: DataTypes.DATE,
    allowNull: false
  },
  state: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  image: {
    type: DataTypes.TEXT('long'), // Use the 'long' option to support longer texts
    allowNull: false
  },
}, {
  tableName: 'Service',
  timestamps: true
});


// export default ServiceShipping;
module.exports = ServiceShipping;

 