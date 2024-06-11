const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  
    "development": {
      "username": process.env.DB_USER,
      "password": process.env.PASSWORD,
      "database": process.env.DB_NAME,
      "host": process.env.HOST,
      "dialect": "postgres"
    },
    "test": {
      "username": process.env.DB_USER,
      "password": process.env.PASSWORD,
      "database":process.env.DB_NAME,
      "host": process.env.HOST,
      "dialect": "postgres"
    },
    "production": {
      "username":process.env.DB_USER,
      "password": process.env.PASSWORD,
      "database": process.env.DB_NAME,
      "host": process.env.HOST,
      "dialect": "postgres"
    }
};