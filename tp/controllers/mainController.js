const data = require("../db/datos")

const mainController = {
    index: function(req, res) {
        res.render("index", {productos: data.productos });
    },

    searchResults: function(req, res) {
        const busqueda = req.query.search_query || "";
        const productos = data.productos;

        res.render("search-results", {productos: data.productos,});
        
      }
};

module.exports = mainController;