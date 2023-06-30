import { DataTypes, Model } from 'sequelize';

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
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
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
export default { PRODUCT_TABLE, ProductSchema, Product }; 