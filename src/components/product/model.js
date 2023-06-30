// import { DataTypes, Model } from 'sequelize';
const { DataTypes, Model } = require( 'sequelize');


//nombre de tabla 
const PRODUCT_TABLE = 'product';

//esquema de producto
const ProductSchema = {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  imagen: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  onUpdate: 'CASCADE',
  onDelete: 'SET NULL'
}

//clase del producto
class Product extends Model {
  static associate(models) {

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: true
    }
  }
}
module.exports= { PRODUCT_TABLE, ProductSchema, Product }; 