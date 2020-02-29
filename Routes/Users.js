const usersController = require("../Controllers/Users");

module.exports = (app) =>
{
    //Consultas
    //app.get("/productos", productosController.allProductos);
    //app.get("/usuario", usuariosContrller.usuario);

    //Operaciones
    app.post("/registrar",usersController.usuario);
   // app.post("/updateProducto", productosController.updateProducto);
    //app.post("/deleteProducto", productosController.deleteProducto);
    
}