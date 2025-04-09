const express = require('express');
const router = express.Router();
const productController=require("../controllers/productController")

router.get("/:id ", productController.detalle)
router.get("/:id/comentar", productController.formularioComentario);

module.exports=router