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
  


  };
  
  module.exports = userController;