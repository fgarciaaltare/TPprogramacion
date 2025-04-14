const data = require("../db/datos")

const mainController = {
    index: function(req, res) {
        res.render("index", {productos: data.productos });
    },

    register: function(req, res) {
        res.render("register");
    },

    login: function(req, res) {
        res.render("login");
    },


    searchResults: function(req, res) {
        res.render("search-results", {productos: data.productos,});
      }
};

module.exports = mainController;