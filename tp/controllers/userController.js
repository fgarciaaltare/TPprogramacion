const userController = {
    perfil: function(req, res) {
      const userId = req.params.id;
      res.render('perfilUsuario', { id: userId });
    },
  
    login: function(req, res) {
      res.render('login');
    },
  
    register: function(req, res) {
      res.render('register');
    }
  };
  
  module.exports = userController;