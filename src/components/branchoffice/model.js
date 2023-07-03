// import { DataTypes, Model } from 'sequelize';
const { DataTypes, Model } = require('sequelize');

const BRANCH_OFFICE_TABLE = 'branch_office';

const BranchOfficeSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  branchname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

class BranchOffice extends Model{
  static associate(models) {
    this.belongsToMany(models.Users, { through: 'UsersBranchOffice'});
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: BRANCH_OFFICE_TABLE,
      modelName: 'BranchOffice',
      timestamps: false 
    }
  }
}

// export { BRANCH_OFFICE_TABLE, BranchOfficeSchema, BranchOffice }; 
module.exports= { BRANCH_OFFICE_TABLE, BranchOfficeSchema, BranchOffice }; 