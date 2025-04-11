const data= require("../db/datos")
const productController={
    detalle: function (req, res){
        const id= req.params.id;
        res.render("productos", {id});
    },

    formularioComentario: function (req,res){
        const idProducto=req.params.id;
        const idcomentario=req.params.idComentario;

        res.render("comentariosProducto", {id: idProducto, idComentario});
    },
    add: function(req,res){
        res.render('product-add', {
            user: data.usuario
          });
    }

    
}

module.exports=productController;