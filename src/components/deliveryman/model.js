import { DataTypes } from 'sequelize';
import sequelize from "../../db/pgdatabase.js";
import bcrypt from 'bcrypt';

const Deliveryman = sequelize.define('Deliveryman', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },

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
  }
}, {
  tableName: 'Deliveryman',
  timestamps: true
});

Deliveryman.associate= function(models){
  Deliveryman.hasMany(models.Service,{
    foreignKey: 'DeliveryManId',
    as: 'services',
  })
}

Deliveryman.sync({ alter: true, logging: console.log })
  .then(() => console.log("Table Deliveryman created"))
  .catch((err)=> console.error("Table Deliveryman not created ", err))

export default Deliveryman; 