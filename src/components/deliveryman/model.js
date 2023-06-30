// import { DataTypes, Model } from 'sequelize';
// import { SERVICE_TABLE } from '../service/model.js';

const { DataTypes, Model }= require('sequelize');
const { SERVICE_TABLE } = require ('../service/model.js');


const DELIVERYMAN_TABLE = 'deliveryman';

const DeliverymanSchema = {
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
  idService: {
    field: 'id_service',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: SERVICE_TABLE,
      key: 'id',
    },
  }
}

class Deliveryman extends Model {
  static associate(models) {
    this.hasMany(models.Service, {
      foreignKey: 'id',
      as: 'service',
    })
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: DELIVERYMAN_TABLE,
      modelName: 'Deliveryman',
      timestamps: true 
    }
  }
}


// export { DELIVERYMAN_TABLE, DeliverymanSchema, Deliveryman}; 
module.exports= { DELIVERYMAN_TABLE, DeliverymanSchema, Deliveryman}; 