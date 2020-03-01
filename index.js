const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const db = require("./Models");

const sql = require("./Database/conecctionMySQL");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const routeProducto = require("./Routes/productos")(app);
const routeUsers = require("./Routes/Users")(app);
const routeLogin = require("./Routes/login")(app);
const routeCategory = require("./Routes/category")(app);

db.sequelize.sync().then(runserver);

function runserver() {
    app.listen(5000,() => {
        console.log("Connection Complete! 🚀");
    });    
}


