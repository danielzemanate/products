const administradorController = require("../Controllers/administrador");

module.exports = (app) => {
    //Consultas
    app.get("/administradores", administradorController.allAdmins);
    app.post("/administrador", administradorController.administrador);

    //Operaciones
    app.post("/createAdministrador", administradorController.createAdministrador);
    app.post("/updateAdministrador", administradorController.updateAdministrador);
    app.post("/deleteAdministrador", administradorController.deleteAdministrador);
}