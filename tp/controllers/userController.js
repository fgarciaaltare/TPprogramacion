const data= require("../db/datos")

const userController = {
  profile: function(req, res) {
    const user = {
        nombreUsuario: data.usuario.nombre,
        email: data.usuario.email,
        foto: data.usuario.avatar,
    };
    res.render("profile", { user });
},
  
    login: function(req, res) {
      res.render('login');
    },
  
    register: function(req, res) {
      res.render('register');
    }

  };
  
  module.exports = userController;