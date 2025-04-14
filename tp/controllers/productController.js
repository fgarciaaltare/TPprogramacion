const data= require("../db/datos")

const productController={
    vistaProducto: function (req, res) {
        res.render("product");
        
        
    }, 
    detalle: function (req, res){
        const id= req.params.id;
        res.render("product", {id});
    },

    formularioComentario: function (req,res){
        const idProducto=req.params.id;
        const idcomentario=req.params.idComentario;

        res.render("comentariosProducto", {id: idProducto, idComentario});
    },
    add: function(req,res){
        res.render('product-add', {
            nombreUsuario: data.usuario.nombre,
          });
    },
    
    
}

module.exports=productController;