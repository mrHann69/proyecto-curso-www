const { DataTypes } = require('sequelize');
const { USERS_TABLE } = require('../../components/user/model');
const { BRANCH_OFFICE_TABLE } = require('../../components/branchoffice/model');
const { PRODUCT_TABLE } = require('../../components/product/model');
const { DELIVERYMAN_TABLE } = require('../../components/deliveryman/model');
const { SERVICE_TABLE } = require('../../components/service/model');
const { SERVICE_SHIPPING_TABLE } = require('../../components/serviceShipping/model')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable(USERS_TABLE,
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        city: {
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
    );
    await queryInterface.createTable(BRANCH_OFFICE_TABLE,
      {
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
      });

    await queryInterface.createTable(PRODUCT_TABLE,
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
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
          autoIncrement: true,
          allowNull: false,
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
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
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

    await queryInterface.createTable(SERVICE_SHIPPING_TABLE, {
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
      },
      idService: {
        field: 'id_service',
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: SERVICE_TABLE,
          key: 'id'
        }
      }
    });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USERS_TABLE);
    await queryInterface.dropTable(BRANCH_OFFICE_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(DELIVERYMAN_TABLE);
    await queryInterface.dropTable(SERVICE_SHIPPING_TABLE);
    await queryInterface.dropTable(SERVICE_TABLE);

  }
};
