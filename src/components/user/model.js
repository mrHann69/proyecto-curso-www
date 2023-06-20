import { DataTypes } from 'sequelize';
import sequelize from "../../db/pgdatabase.js";

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Users',
  timestamps: true
});


// User.sync({ force: true })
User.sync({ alter: true, logging: console.log })
  .then(() => console.log("Table Users created"))
  .catch((err)=> console.error("Table User not created ", err))

export default User; 