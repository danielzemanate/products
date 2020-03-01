var connection = require('../Database/conecctionMySQL');
var db = {};


db.producto = require('../Models/productos');

db.users = require('../Models/Users');
db.categoria=require('../Models/category');


db.sequelize = connection;

module.exports = db;