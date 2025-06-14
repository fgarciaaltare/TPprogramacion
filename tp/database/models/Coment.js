module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'Coment'; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        id_post:{
           
            type: dataTypes.INTEGER,
        },
        id_usuario:{
            type: dataTypes.INTEGER,
        },
        comentario:{
            type: dataTypes.STRING,
        },
      
    }

    let config = {
        tableName : "comentarios",
        timestamps:true,
        underscored:false //Indica al modelo si debe buscar los campos createdAt y updatedAt en la tabla. Si están en la tabla no es necesario declararlos en la lista de campos.
        // Si en la tabla están con guión bajo hay que usar la propiedad underscore.
        // underscored: false, //Indica al modelo que si loscampos de timestamp en la tabla usan o no guiones bajos en lugar de camelCase.
    }

   const Coment = sequelize.define(alias, cols, config);
   Coment.associate = function(models){
    Coment.belongsTo(models.User, {
        as: "usuarios",
        foreignKey: "id_usuario"
    });
    Coment.belongsTo(models.Product, {
        as: "productos",
        foreignKey: "id_post"
    });
   }



   return Coment;
}