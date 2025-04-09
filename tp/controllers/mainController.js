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

    profile: function(req, res) {
        const user = {
            nombreUsuario: "usuario123",
            email: "usuario@example.com",
            foto: "/images/profile.jpg"
        };
        res.render("profile", { user });
    },

    searchResults: function(req, res) {
        res.render("search-results");
    }
};

module.exports = mainController;