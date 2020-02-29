// const db = require('../Database/conecctionMySQL');
const db = require('../Models');
const administrador = db.administrador;
const usuario = db.usuario;

module.exports = {

    allAdmins: async (req, res) => {
        usuario.findAll({
            where: {rol: 'administrador'}
        })
            .then(users => res.send(users))
            .catch(error => console.log(error));
    },

    administrador: async (req, res) => {
        var data = req.body;
        var rol = "administrador"

        console.log(data);
    
        usuario.findOne({
            where: {email: data.email, rol: rol}
        })
        .then(admin =>{
            console.log("DAtos",admin)
            res.send(admin)
        } )
        .catch(error => console.log(error));
    },

    createAdministrador: async (req, res) => {
        var data = req.body;

        usuario.create({
            nombre: data.nombre,
            apellido: data.apellido,
            identificacion: data.identificacion,
            telefono: data.telefono,
            email: data.email,
            rol: "administrador"
        })
            .then(user => {
                administrador.create({ usuariosId: user.id })
                    .then(administrador => res.send(administrador))
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    },

    deleteAdministrador: async (req, res) => {
        var data = req.body;

        administrador.findOne({
            where: {usuariosId: data.id}
        })
            .then(administrador => {
                administrador.destroy({
                    where: { id: administrador.id }
                })
                .then(administrador => {
                    usuario.destroy({
                        where: {id: administrador.usuariosId}
                    })
                    .then(user => res.send("DESTROYEEED! ☠"))
                    .catch(error => console.log(error));
                })
                .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    },

    updateAdministrador: async (req, res) => {
        var data = req.body;

        administrador.findByPk(data.idAdministrador)
            .then(administrador => {
                usuario.update(data,{
                    where: {id: administrador.usuariosId}
                })
                .then(administrador => res.send(administrador))
                .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    },
}