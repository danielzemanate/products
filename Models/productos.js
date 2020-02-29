const sequelize = require("sequelize");
const connection = require("../Database/conecctionMySQL");

module.exports = connection.define('productos', {

	id_user: {
		type: sequelize.INTEGER(45),
		allowNull: true,
		field: 'id_user'
	},

	id_category: {
		type: sequelize.INTEGER(45),
		allowNull: true,
		field: 'id_category'
	},

	referencia: {
		type: sequelize.INTEGER(45),
		allowNull: true,
		field: 'referencia'
	},
	
		nombre: {
			type: sequelize.STRING(45),
			allowNull: true,
			field: 'nombre'
		},
		tipo: {
			type: sequelize.STRING(45),
			allowNull: true,
			field: 'tipo'
		},
		precio: {
			type: sequelize.INTEGER(45),
			allowNull: true,
			field: 'precio'
		},
		
	}, {
		tableName: 'productos'
	});
