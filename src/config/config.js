// import dotenv from'dotenv';
const dotenv = require('dotenv');
dotenv.config();

const config = {
    PORT: process.env.PORT,
    POSTGRES_URI: process.env.POSTGRES_URI,
    POSTGRES_URI_DOCKER: process.env.POSTGRES_URI_DOCKER,
    POSTGRES_USERNAME: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
    POSTGRES_PORT: process.env.POSTGRES_PORT,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    TOKEN_EXPIRES: process.env.TOKEN_EXPIRES,
    BCRYPT_SECRET: process.env.BCRYPT_SECRET
}


// export default config;
module.exports = config;