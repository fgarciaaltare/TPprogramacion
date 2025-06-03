const data= require("../db/datos")
const bcrypt = require('bcryptjs')
const db = require('../database/models')

const userController = {
  profile: function(req, res) {
    if (!req.session.usuarioLogueado) {
      return res.redirect('/users/login');
    }
  
    const usuario = req.session.usuarioLogueado;
  
    db.Product.findAll({
      where: {
        id_usuario: usuario.id
      }
    })
    .then(function(productosDelUsuario) {
      res.render("profile", {
        usuario: usuario,
        email: usuario.email,
        foto: usuario.foto_perfil,
        cantidadProductos: productosDelUsuario.length,
        productos: productosDelUsuario
      });
    })
    .catch(function(error) {
      console.log("Error al buscar productos:", error);
      res.send("Ocurrió un error al cargar el perfil.");
    });
  },

  profileById: function(req, res) {
    const idUsuario = req.params.id;

    db.User.findOne({
      where: { id: idUsuario },
      include: [{ association: 'productos' }]
    })
    .then(function(usuario) {
      console.log(usuario);
      //no hace falta el findAll ustedes aca tienen que trear los productos atravez d el a
      if (!usuario) {
        return res.send("Usuario no encontrado.");
      }
      res.render('profile',{
        usuario: usuario,
        email: usuario.email,
        foto: usuario.foto_perfil,
        cantidadProductos: usuario.productos.length,
        productos: usuario.productos
      } )
    })
    .catch(function(error) {
      console.log("Error al buscar perfil por ID:", error);
      res.send("Ocurrió un error al cargar el perfil.");
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

  if (password === "") {
    return res.render("register", {error: "La contraseña no puede estar vacía."});
  }

  if (password.length < 3) {
    return res.render("register", {error: "La contraseña debe tener al menos 3 caracteres."});
  }
    
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
        if (error.name === "SequelizeUniqueConstraintError"){
          return res.send("El email registrado ya pertenece a un usuario")
        }
        else{
          return res.send(error);
        }
      });
},

login: function(req, res) {
  if (req.session.usuarioLogueado != undefined) {
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
        return res.send("El email no está registrado.");
      }

      
      const passwordOk = bcrypt.compareSync(pass, usuario.pass);
      if (!passwordOk) {
        return res.send("La contraseña es incorrecta.");
      }

   
      req.session.usuarioLogueado = usuario;

      
      if (req.body.recordame) {
          res.cookie("recordame", usuario.email, { maxAge: 1000 * 60 * 60 * 24 });
      }

      return res.redirect("/users/profile");
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