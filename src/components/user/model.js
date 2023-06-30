import { DataTypes, Model } from 'sequelize';

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
  }
}

UsersSchema.isValidPassword = function (password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword).catch(err=>console.error("error while comparing passwords",err));
}

class Users extends Model{
  static associate(models) {

  }
  static confi(sequelize){
    return {
      sequelize,
      tableName: USERS_TABLE,
      modelName: 'Users',
      timestamps: true 
    }
  }
}


// User.sync({ force: true })
// User.sync({ alter: true, logging: console.log })
//   .then(() => console.log("Table Users created"))
//   .catch((err)=> console.error("Table User not created ", err))

export default { USERS_TABLE, UsersSchema, Users }; 