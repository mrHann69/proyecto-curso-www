import { DataTypes } from 'sequelize';
import sequelize from "../../db/pgdatabase.js";


const Service = sequelize.define('Service', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: false
  },
  destiny: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  city: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  packagesNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
  
}, {
  tableName: 'Service',
  timestamps: true
});

Service.associate=function(models){
  Service.belongsTo(models.DeliveryMan,{
    foreignKey: 'DeliveryManId',
    as: 'DeliveryMan'
  })
}

export default Service;
 