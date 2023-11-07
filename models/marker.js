const Sequelize = require("sequelize");
const sequelize = require("../db");
const Image = require("./image");

const Marker = sequelize.define("markers", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  xCoordinate: Sequelize.FLOAT,
  yCoordinate: Sequelize.FLOAT,
  createdAt: Sequelize.DATE,
});

Marker.associate = function (models) {
  Marker.belongsTo(Image, { foreignKey: "imageId" });
};

module.exports = Marker;
