const data = require("../db/datos")
const db = require('../database/models');
const op = db.Sequelize.Op;

const mainController = {

    index: function (req, res) {
        db.Product.findAll({
          include: [{ association: "comentarios" },
            {association: "usuarios"}
          ]
        }).then(function(productos) {
          res.render("index", {
            productos: productos,
            user: req.session.user
          });
        }).catch(function(error) {
          console.log("Error al buscar productos", error);
          res.send("Ocurrió un error");
        });
      },

    searchResults: function(req, res) {
        let busqueda = req.query.search_query;

        console.log("entre en el query");

        db.Product.findAll({   
            include: [{ association: "usuarios" },
                {association: 'comentarios'}, 
            ], 
            where: {
                nombre_producto: {[op.like]: `%${busqueda}%`}
            }
          })
          .then(function(resultados){
            console.log("entre en el then");
            res.render("search-results", {
                productos: resultados,
                busqueda: busqueda
            });
        })
    }
 
};

module.exports = mainController;






