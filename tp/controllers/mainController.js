const data = require("../db/datos")
const db = require('../database/models');
const { Association } = require("sequelize");
const op = db.Sequelize.Op;

const mainController = {
    index: function(req, res) {
        res.render("index", {productos: data.productos });
    },

    searchResults: function(req, res) {
        let busqueda = req.query.search_query;
        db.Product.findAll({   
            include: [{ association: "usuario" },
            ], 
            where: {
                nombre_producto: {[op.like]: `%${busqueda}%`}
            }
          })
        .then(function(resultados){
         
            res.render("search-results", {
                productos: resultados,
                busqueda: busqueda
            });
        })
    }
 
};

module.exports = mainController;

