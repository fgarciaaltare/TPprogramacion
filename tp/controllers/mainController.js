const data = require("../db/datos")

const mainController = {
    index: function(req, res) {
        res.render("index", {productos: data.productos });
    },

    register: function(req, res) {
        res.render("register");
    },
    processRegister: function(req,res){
        const usuario = req.body.usuario;
        const email = req.body.email;
        const password = req.body.contrsenia;
        const fechaNacimiento = req.body.fechaNacimiento;
        
        if (!email) {
            return res.render('register', { error: 'El email no puede estar vacío.' });
          }
        
        db.User.findOne({ where: { email: email } })
        .then(function(usuario) {
            if (usuario) {
                return res.render('register', { error: 'El email ya está registrado.' });
            }
        })
        .catch(function(error) {
          console.error(error);
          return res.send('Error en el servidor.');
        });

        if (!password) {
            return res.render('register', { error: 'La contraseña no puede estar vacía.' });
          }
        if (password.length < 3) {
            return res.render('register', { error: 'La contraseña debe tener al menos 3 caracteres.' });
          }

        const passwordEncriptada = bcrypt.hashSync(password, 10);
          
        db.User.create({
            name: usuario,
            emai: email,
            password: passwordEncriptada,
            fechaNacimiento: fechaNacimiento,
        }).then(function(){
            return res.redirect("/login")
        }).catch(function(error){
            return res.send(error)
        })

    },
   

    login: function(req, res) {
        res.render("login");
    },


    searchResults: function(req, res) {
        res.render("search-results", {productos: data.productos,});
      }
};

module.exports = mainController;