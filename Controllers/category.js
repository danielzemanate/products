const db = require('../Models');
const categoria = db.categoria;

module.exports = {

    allCategories: async (req, res) =>
    {
        categoria.findAll()
        .then( categories=> res.send(categories))
        .catch(error => console.log(error));
    },

    category: async (req, res) =>
    {
        var data = req.body;

        categoria.findByPk(data.id)
            .then(categoria => res.send(categoria))
            .catch(error => console.log(error));
    },

    createCategory: async (req, res) =>
    {
        categoria.create(req.body)
        .then(categoria => res.send({
            status: 200,
            category: categoria
           }))
        .catch(error => console.log(error));
    },

    updateCategory: async (req, res) => 
    {
        var data = req.body;
        var id= req.params.id;

        categoria.update(data,{
            where: {id: id}
        })
            .then(categoria => res.send({
             status: 200,
             id: data.id
            }))
            .catch(error => console.log(error));
    },

    deleteCategory: async (req, res) => {
        var id = req.params.id;

        categoria.destroy({
            where: { id: id }
        })
            .then(categoria => res.send({
                status: 200,
                id: id
               }))
            .catch(error => console.log(error));
    },

    //######################################
    
    getListCategoriesUser: async (req, res) => {
        console.log("Request: ", req.params)
        var id_user = req.params.id_user;

        categoria.findAll({
            where: {
              id_user: id_user
            }
          })
        .then( categorias=> res.send(categorias))
        .catch(error => console.log(error));
    }
}

