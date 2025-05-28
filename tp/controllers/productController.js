const data= require("../db/datos")
const db = require('../database/models')

const productController={
    vistaProducto: function (req, res) {
        res.render("product");
        
        
    }, 
    detalle: function(req, res) {
        const idProducto = req.params.id;
      
        db.Product.findByPk(idProducto)
          .then(function(producto) {
            if (!producto) {
              return res.send("Producto no encontrado");
            }
      
            res.render("product", { producto: producto });
          })
          .catch(function(error) {
            console.log("Error al buscar producto:", error);
            res.send("Ocurrió un error.");
          });
      },
    formularioComentario: function (req,res){
        const idProducto=req.params.id;
        const idcomentario=req.params.idComentario;

        res.render("comentariosProducto", {id: idProducto, idComentario});
    },
    add: function(req, res) {
        if (!req.session.usuarioLogueado) {
            return res.redirect("/users/login");
        }
    
        res.render("product-add", {
            usuario: req.session.usuarioLogueado
        });
    },
    guardarProducto: function(req, res) {
        if (!req.session.usuarioLogueado) {
          return res.redirect("/users/login");
        }
    
        db.Product.create({
          id_usuario: req.session.usuarioLogueado.id,
          nombre_imagen: req.body.imagen,
          nombre_producto: req.body.nombre,
          descripcion: req.body.descripcion
        })
        .then(function() {
          res.redirect("/");
        })
        .catch(function(error) {
          console.log("Error al guardar el producto:", error);
          res.send("Hubo un error al guardar el producto.");
        });
      }
    };
    


module.exports=productController;