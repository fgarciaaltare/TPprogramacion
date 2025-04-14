const data= require("../db/datos")

const userController = {
  profile: function(req, res) {
   
    res.render("profile", { 
        nombreUsuario: data.usuario.nombre,
        email: data.usuario.email,
        foto: data.usuario.imagenPerfil,
        productos: data.productos
    });
},
  
    login: function(req, res) {
      res.render('login');
    },
  
    register: function(req, res) {
      res.render('register');
    }

  };
  
  module.exports = userController;