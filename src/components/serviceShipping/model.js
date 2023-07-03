const { DataTypes, Model } = require('sequelize');

const SERVICE_SHIPPING_TABLE = 'service_shipping';

const ServiceShippingSchema={
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dateChange: {
    type: DataTypes.DATE,
    allowNull: false
  },
  state: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  image: {
    type: DataTypes.TEXT('long'), // Use the 'long' option to support longer texts
    allowNull: false
  }
}

class ServiceShipping extends Model{
    static associate(models){
        this.belongsTo(models.Service,
            {
                foreignKey:'id',
                as:'service',
            });
    }

    static config (sequelize){
        return{
            sequelize,
            tableName: SERVICE_SHIPPING_TABLE,
            modelName: 'Service_shipping',
            timestamps:true
        }
    }
}
// export default ServiceShipping;
module.exports ={SERVICE_SHIPPING_TABLE,ServiceShippingSchema, ServiceShipping};

 
