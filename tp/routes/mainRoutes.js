const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
router.get("/register", mainController.register);
router.get("/login", mainController.login);
router.get("/profile", mainController.profile);
router.get("/search-results", mainController.searchResults);

module.exports = router;