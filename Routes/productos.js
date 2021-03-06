const productosController = require("../Controllers/productos");

module.exports = (app) =>
{
    //Consultas
    app.get("/products", productosController.allProducts);
    //app.get("/usuario", usuariosContrller.usuario);

    //Operaciones
    app.post("/createProduct",productosController.createProduct);
    app.post("/updateProduct/:id", productosController.updateProduct);
    app.get("/deleteProduct/:id", productosController.deleteProduct);
    
    app.get("/getProductUser/:id", productosController.getProductUser);
    app.get("/getListProductsUser/:id", productosController.getListProductsUser);

}