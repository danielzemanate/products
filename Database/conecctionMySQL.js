const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodejs_login1", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
global.sequelize = sequelize;