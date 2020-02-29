var connection = require('../Database/conecctionMySQL');
var db = {};


db.producto = require('../Models/productos');
db.administrador = require('../Models/administrador');
db.users = require('../Models/Users');
db.categoria=require('../Models/category');


db.sequelize = connection;

module.exports = db;