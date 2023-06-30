// import bcrypt from 'bcrypt';
// import { DataTypes } from 'sequelize';
// import { USERS_TABLE } from '../../components/user/model';
// import { BRANCH_OFFICE_TABLE } from '../../components/branchoffice/model';
// import { PRODUCT_TABLE } from '../../components/product/model';
// import { DELIVERYMAN_TABLE } from '../../components/deliveryman/model';
// import { SERVICE_TABLE } from '../../components/service/model';

// import {createRequire} from 'module';
// const require = createRequire(import.meta.url);

const bcrypt = require('bcrypt');
const { DataTypes } = require('sequelize');
const { USERS_TABLE } = require('../../components/user/model');
const { BRANCH_OFFICE_TABLE } = require('../../components/branchoffice/model');
const { PRODUCT_TABLE } = require('../../components/product/model');
const { DELIVERYMAN_TABLE } = require('../../components/deliveryman/model');
const { SERVICE_TABLE } = require('../../components/service/model');

module.exports = {
// export default {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable(USERS_TABLE,
      {
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
        // isValidPassword: async function (password, hashedPassword) {
        //   return await bcrypt.compare(password, hashedPassword).catch(err => console.error("error while comparing passwords", err));
        // },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      }
    );
    await queryInterface.createTable(BRANCH_OFFICE_TABLE,
      {
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
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      });

    await queryInterface.createTable(PRODUCT_TABLE,
      {
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
        }
      });
      await queryInterface.createTable(SERVICE_TABLE,
        {
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
        });
    await queryInterface.createTable(DELIVERYMAN_TABLE,
      {
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
      });


  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(USERS_TABLE);
    await queryInterface.dropTable(BRANCH_OFFICE_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(SERVICE_TABLE);
    await queryInterface.dropTable(DELIVERYMAN_TABLE);

  }
};