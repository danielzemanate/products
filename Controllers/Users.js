const db = require('../Models');
const users = db.users;
const cors = require('cors')
const jwt = require('jsonwebtoken')

process.env.SECRET_KEY = 'secret'

module.exports = {

    usuario: async (req, res) =>
    {
        const today = new Date()
        const userData = {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          correo: req.body.correo,
          password: req.body.password,
          creado: today
        }
      
  users.findOne({
    where: {
      correo: req.body.correo
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        users.create(userData)
          .then(user => {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.json({ token: token })
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      } else {
        res.json({ error: 'El Usuario ya Existe!'})
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
}

  
   
}    
  
