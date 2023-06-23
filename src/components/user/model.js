import { DataTypes } from 'sequelize';
import sequelize from "../../db/pgdatabase.js";
import bcrypt from 'bcrypt';


const User = sequelize.define('User', {
  name: {
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
  telephone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  roluser: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Users',
  timestamps: true
});


User.isValidPassword = function (password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword).catch(err=>console.error("error while comparing passwords",err));
}

// User.sync({ force: true })
User.sync({ alter: true, logging: console.log })
  .then(() => console.log("Table Users created"))
  .catch((err)=> console.error("Table User not created ", err))

export default User; 