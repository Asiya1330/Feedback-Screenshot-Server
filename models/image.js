const Sequelize = require("sequelize");
const sequelize = require("../db");

const Image = sequelize.define("images", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  url: Sequelize.STRING,
  createdAt: Sequelize.DATE,
});

module.exports = Image;
