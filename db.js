const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: process.env.DIALECT,
  host: process.env.HOST,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
});

module.exports = sequelize;
