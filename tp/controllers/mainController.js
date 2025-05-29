const data = require("../db/datos")
const db = require('../database/models')
const op = db.Sequelize.Op;

const mainController = {
    index: function(req, res) {
        res.render("index", {productos: data.productos });
    },

    searchResults: function(req, res) {
        let busqueda = req.query.search_query;
        db.Product.findAll({
            where: {
                nombre_producto: {[op.like]: `%${busqueda}$%`}
            }
          })
        .then(function(resultados){
            res.send(resultados)
            res.render("search-results", {
                productos: resultados,
                busqueda: busqueda
            });
        })
    }
 
};

module.exports = mainController;

