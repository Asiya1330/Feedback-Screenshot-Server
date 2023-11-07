const Sequelize = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  createdAt: Sequelize.DATE,
});

module.exports = User;
