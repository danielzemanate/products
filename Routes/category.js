const categoryController = require("../Controllers/category");

module.exports = (app) =>
{
    //Consultas
    app.get("/categories", categoryController.allCategories);
    //app.get("/usuario", usuariosContrller.usuario);

    //Operaciones
    app.post("/createCategory",categoryController.createCategory);
    app.post("/updateCategory", categoryController.updateCategory);
    app.post("/deleteCategory", categoryController.deleteCategory);
    
    app.get("/getCategoriesUser/:id_user", categoryController.getCategoriesUser);

}