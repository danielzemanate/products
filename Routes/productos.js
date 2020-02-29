const productosController = require("../Controllers/productos");

module.exports = (app) =>
{
    //Consultas
    app.get("/products", productosController.allProducts);
    //app.get("/usuario", usuariosContrller.usuario);

    //Operaciones
    app.post("/createProduct",productosController.createProduct);
    app.post("/updateProduct", productosController.updateProduct);
    app.get("/deleteProduct/:id", productosController.deleteProduct);
    
    app.get("/getProductUser/:id_user", productosController.getProductsUser);

}