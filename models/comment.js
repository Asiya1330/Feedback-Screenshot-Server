const Sequelize = require("sequelize");
const sequelize = require("../db");
const Marker = require("./marker");
const User = require("./user");

const Comment = sequelize.define("comments", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  comment: Sequelize.STRING,
  createdAt: Sequelize.DATE,
});
Comment.associate = function (models) {
  Comment.belongsTo(Marker, { foreignKey: "markerId" });
  Comment.belongsTo(User, { foreignKey: "userId" });
};

module.exports = Comment;
