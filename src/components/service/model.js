// import { DataTypes, Model } from 'sequelize';

const { DataTypes, Model } =require('sequelize');


const SERVICE_TABLE = 'service';

const ServiceSchema = {
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

}

class Service extends Model {
  static associate(models) {
    this.belongsTo(models.Deliveryman,
      {
        foreignKey: 'id',
        as: 'deliveryman'
      });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: SERVICE_TABLE,
      modelName: 'Service',
      timestamps: true
    }
  }
}

module.exports = { SERVICE_TABLE, ServiceSchema, Service };
