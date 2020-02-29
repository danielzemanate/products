const loginController = require("../Controllers/login");

module.exports = (app) =>
{
    //Consultas
    //app.get("/productos", productosController.allProductos);
    //app.get("/usuario", usuariosContrller.usuario);

    //Operaciones
    app.post("/login",loginController.login);
   // app.post("/updateProducto", productosController.updateProducto);
    //app.post("/deleteProducto", productosController.deleteProducto);
    
}