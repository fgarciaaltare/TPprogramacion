const data= require("../db/datos")
const db = require('../database/models');

const productController={
    vistaProducto: function (req, res) {
        res.render("product");
        
        
    }, 
    detalle: function(req, res) {
        const idProducto = req.params.id;
        
      
        db.Product.findByPk(idProducto,{
          include: [
            {
              association: 'comentarios',
              include: [{ association: 'usuarios' }] 
            },
            {
              association: 'usuarios' 
            }
          ]
          })
        .then(function(producto) {
          console.log(producto);
          
          if (!producto) {
            return res.send("Producto no encontrado");
          }

        
          res.render("product", {
            producto: producto,
            comentarios: producto.comentarios,
            usuarioLogueado: req.session.usuarioLogueado
          });

  
        })
        .catch(function(error) {
          console.log(error);
          
          console.log("Error al buscar producto:", error);
          res.send(error);
        });
      },
    formularioComentario: function (req,res){
        const idProducto=req.params.id;
        const idComentario=req.params.idComentario;

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
      },

      crearComentario: function(req, res) {
        if (!req.session.usuarioLogueado) {
          return res.redirect("/users/login");
        }
    
        const nuevoComentario = {
          id_post: req.params.id,
          id_usuario: req.session.usuarioLogueado.id,
          comentario: req.body.comentario
        };

        console.log(nuevoComentario);
        

        db.Coment.create(nuevoComentario)
        .then(function() {
          res.redirect(`/product/detalle/${req.params.id}`);
      })
      .catch(function(error) {
        console.log("Error al agregar comentario:", error);
        res.send("No se pudo agregar el comentario.");
      });
    
    }
  }
    


module.exports=productController;