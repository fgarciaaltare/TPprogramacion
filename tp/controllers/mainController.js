const data = require("../db/datos")

const mainController = {
    index: function(req, res) {
        res.render("index", {productos: data.productos });
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
        const password = req.body.contrsenia;
        const fechaNacimiento = req.body.fechaNacimiento;
    
        if (!email) {
            return res.render('register', { error: 'El email no puede estar vacío.' });
        }
    
        db.User.findOne({ where: { email: email } })
        .then(function(usuarioEncontrado) {
            if (usuarioEncontrado) {
                return res.render('register', { error: 'El email ya está registrado.' });
            }
    
            if (!password) {
                return res.render('register', { error: 'La contraseña no puede estar vacía.' });
            }
    
            if (password.length < 3) {
                return res.render('register', { error: 'La contraseña debe tener al menos 3 caracteres.' });
            }
    
            const passwordEncriptada = bcrypt.hashSync(password, 10);
    
            db.User.create({
                name: usuario,
                email: email, 
                password: passwordEncriptada,
                birthdate: fechaNacimiento,
                createdAt: new Date()
            }).then(function(){
                return res.redirect("/login");
            }).catch(function(error){
                return res.send(error);
            });
    
        }).catch(function(error) {
            console.error(error);
            return res.send('Error en el servidor.');
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
        const contrasenia = req.body.contrasenia;
    
        
        db.User.findOne({ where: { email: email } })
        .then(function(usuario) {
            if (!usuario) {
                return res.render("login", { error: "El email no está registrado." });
            }
    
            
            const passwordOk = bcrypt.compareSync(contrasenia, usuario.password);
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
    searchResults: function(req, res) {
        res.render("search-results", {productos: data.productos,});
      }
};

module.exports = mainController;