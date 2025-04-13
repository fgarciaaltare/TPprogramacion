

const mainController = {
    index: function(req, res) {
        res.render("index");
    },

    register: function(req, res) {
        res.render("register");
    },

    login: function(req, res) {
        res.render("login");
    },


    searchResults: function(req, res) {
        const termino = req.query.search;
        const resultados = [];
      
        for (let i = 0; i < data.productos.length; i++) {
          let nombre = data.productos[i].nombre;
          if (nombre === termino) {
            resultados.push(data.productos[i]);
          }
        }
      
        res.render("search-results", {
          productos: resultados,
          
        });
      }
};

module.exports = mainController;