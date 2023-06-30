// import { DataTypes, Model } from 'sequelize';
// import bcrypt from 'bcrypt';

const { DataTypes, Model } = require('sequelize')
const bcrypt = require('bcrypt')

const USERS_TABLE = 'users';

const UsersSchema = {
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
  },
}


class Users extends Model {
  static associate(models) {
    this.belongsToMany(models.BranchOffice, { through: 'UsersBranchOffice' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USERS_TABLE,
      modelName: 'Users',
      timestamps: true
    }
  }
  static async isValidPassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword).catch(err => console.error("error while comparing passwords", err));
  }
}


// export { USERS_TABLE, UsersSchema, Users }; 
module.exports = { USERS_TABLE, UsersSchema, Users }; 