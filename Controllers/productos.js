const db = require('../Models');
const producto = db.producto;

module.exports = {

    allProducts: async (req, res) =>
    {
        producto.findAll()
        .then( productos=> res.send(productos))
        .catch(error => console.log(error));
    },

    product: async (req, res) =>
    {
        var data = req.body;

        producto.findByPk(data.id)
            .then(producto => res.send(producto))
            .catch(error => console.log(error));
    },

    createProduct: async (req, res) =>
    {
        producto.create(req.body)
        .then(producto => res.send({
            status: 200,
            product: producto
           }))
        .catch(error => console.log(error));
    },

    updateProduct: async (req, res) => 
    {
        var data = req.body;
        var id= req.params.id

        producto.update(data,{
            where: {id: id}
        })
            .then(producto => res.send({
             status: 200,
             id: data.id
            }))
            .catch(error => console.log(error));
    },

    deleteProduct: async (req, res) => {
        var id = req.params.id;

        producto.destroy({
            where: { id:id}
        })
            .then(producto => res.send({
                status: 200,
                id: id
               }))
            .catch(error => console.log(error));
    },

    //######################################
    
    getListProductsUser: async (req, res) => {
        console.log("Request: ", req.params)
        var id= req.params.id;

        producto.findAll({
            where: {
              id_user: id
            }
          })
        .then( productos=> res.send(productos))
        .catch(error => console.log(error));
    },
    getProductUser: async (req, res) => {
        console.log("Request: ", req.params)
        var id= req.params.id;

        producto.findAll({
            where: {
              id: id
            }
          })
        .then( productos=> res.send(productos))
        .catch(error => console.log(error));
    }

}

