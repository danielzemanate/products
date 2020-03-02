const categoryController = require("../Controllers/category");

module.exports = (app) =>
{
    //Consultas
    app.get("/categories", categoryController.allCategories);
    //app.get("/usuario", usuariosContrller.usuario);

    //Operaciones
    app.post("/createCategory",categoryController.createCategory);
    app.post("/updateCategory/:id", categoryController.updateCategory);
    app.get("/deleteCategory/:id", categoryController.deleteCategory);

    
    app.get("/getCategoryUser/:id", categoryController.getCategoryUser);
    app.get("/getCategoriesUser/:id_user", categoryController.getListCategoriesUser);

}