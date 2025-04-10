const express = require('express');
const router = express.Router();
const productController=require("../controllers/productController")

router.get("/detalle/:id ", productController.detalle)


module.exports=router