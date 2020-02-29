const sequelize = require("sequelize");
const connection = require("../Database/conecctionMySQL");

module.exports = connection.define('administrador', {
	
		usuariosId: {
			type: sequelize.INTEGER(11),
			references: {
				model: 'usuarios',
				key: 'id'
			},
			field: 'usuarios_id'
		}
	}, {
		tableName: 'administrador'
	});
