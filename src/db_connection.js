const Sequelize = require('sequelize');
const dotenv =require('dotenv');
const path = require('path');

const envPath = path.resolve(__dirname, '../.env'); 
dotenv.config({ path: envPath });

const dbUser =process.env.POSTGRES_USER;
const dbName =process.env.POSTGRES_DB;
const dbPassword = process.env.POSTGRES_PASSWORD;

const sequelize = new Sequelize('postgres://'+dbUser+':'+dbPassword+'@localhost:5432/'+dbName)

// Check if the connection is established
async function testConnection(){
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}
testConnection()
