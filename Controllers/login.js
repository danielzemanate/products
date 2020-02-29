const db = require('../Models');
const users = db.users;
const cors = require('cors')
const jwt = require('jsonwebtoken')

process.env.SECRET_KEY = 'secret'

module.exports = {

    login: async (req, res) =>
    {
        
        users.findOne({
            where: {
              correo: req.body.correo,
              password: req.body.password
            }
          })
    //TODO bcrypt
   
    .then(user => {
        if (user) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.json({ token: token })
        } else {
          res.send('El usuario no existe')
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  
}

  
   
}    