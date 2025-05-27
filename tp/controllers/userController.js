const data= require("../db/datos")
const bcrypt = require('bcryptjs')
const db = require('../database/models')

const userController = {
  profile: function(req, res) {
   
    res.render("profile", { 
        nombreUsuario: data.usuario.nombre,
        email: data.usuario.email,
        foto: data.usuario.imagenPerfil,
        productos: data.productos
    });
},
register: function(req, res) {
  if (req.session.usuarioLogueado) {
      return res.redirect("/profile");
  }
  res.render("register");
},

processRegister: function(req,res){
  const usuario = req.body.usuario;
  const email = req.body.email;
  const password = req.body.pass;
  const fechaNacimiento = req.body.fechaNacimiento;
  const foto= req.body.fotoPerfil

    console.log(`no encriptada: ${password}`);
    console.log(usuario);
    console.log(email);
    console.log(fechaNacimiento);
    
    
 
      const passwordEncriptada = bcrypt.hashSync(password, 10);

      console.log(`encriptada: ${passwordEncriptada}`);
      

      db.User.create({
          email: email, 
          pass: passwordEncriptada,
          fecha: fechaNacimiento,
          foto_perfil: foto,

      }).then(function(response){
          return res.redirect("/users/login");
      }).catch(function(error){
          return res.send(error);
      });
},

login: function(req, res) {
  if (req.session.usuarioLogueado) {
      return res.redirect("/profile");
  }

  res.render("login");
},
processLogin: function(req, res) {
  const email = req.body.email;
  const pass = req.body.pass;

  
  db.User.findOne({ where: { email: email } })
  .then(function(usuario) {
      if (!usuario) {
          return res.render("login", { error: "El email no está registrado." });
      }

      
      const passwordOk = bcrypt.compareSync(pass, usuario.password);
      if (!passwordOk) {
          return res.render("login", { error: "La contraseña es incorrecta." });
      }

   
      req.session.usuarioLogueado = usuario;

      
      if (req.body.recordame) {
          res.cookie("recordame", usuario.email, { maxAge: 1000 * 60 * 60 * 24 });
      }

      return res.redirect("/");
  })
  .catch(function(error) {
      console.log("Error al loguear:", error);
      return res.render("login", { error: "Error en el servidor." });
  });
},
logout: function(req, res) {
  req.session.destroy();
  res.clearCookie('recordame');

  return res.redirect("/");
},
  


  };
  
  module.exports = userController;