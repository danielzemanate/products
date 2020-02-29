const sequelize = require("sequelize");
const connection = require("../Database/conecctionMySQL");

module.exports = connection.define('categoria', {

	id_user: {
		type: sequelize.INTEGER(45),
		allowNull: true,
		field: 'id_user'
    },
    nombre: {
		type: sequelize.STRING(45),
		allowNull: true,
		field: 'categoria'
	},


	}, {
		tableName: 'categoria'
	});
