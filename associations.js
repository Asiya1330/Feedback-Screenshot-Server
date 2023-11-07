const fs = require("fs");
const Sequelize = require("sequelize");
const sequelize = require("./db");
const path = require("path");
var basename = path.basename(module.filename);

const models = path.join(__dirname, "models"); // correct it to path where your model files are

const db = {};
fs.readdirSync(models)
  .filter(function (file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function (file) {
    // Sequelize version >= 6.x
    // var model =  (require(path.join(models, file)))
    const model =  (require(path.join(models, file)))
    // (
    //   sequelize,
    //   Sequelize.DataTypes
    // );
    db[model.name] = model;
  });
// .forEach((file) => {
//     const model = require(path.join(__dirname, file));
//     db[model.name] = model;
// });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize; // for accessing static props and functions like Op.or
db.sequelize = sequelize; // for accessing connection props and functions like 'query' or 'transaction'

module.exports = db;
