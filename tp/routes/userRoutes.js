const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get("/profile", userController.profile)
router.get("/register", userController.register);
router.get("/login", userController.login);
router.post("/registerProceso", userController.processRegister);
router.post("/processLogin", userController.processLogin);
router.post("/logout", userController.logout);
router.get('/profile/:id', userController.profileById);

module.exports=router