const express = require('express');
const router = express.Router();
const productController=require("../controllers/productController")

router.get("/", productController.vistaProducto);
router.get("/detalle/:id", productController.detalle);
router.get("/product-add", productController.add)

router.post("/product-add", productController.guardarProducto);


module.exports=router