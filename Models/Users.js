const Sequelize= require('sequelize')
const connection = require("../Database/conecctionMySQL");

module.exports = connection.define(
    'users',
    {
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre:{
            type:Sequelize.STRING
        },
        apellido:{
            type:Sequelize.STRING
        },
        correo:{
            type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        },
        creado:{
            type:Sequelize.DATE,
            defaultValue:Sequelize.NOW
        }
    },
    {
        tableName: 'users'
    },
    
)