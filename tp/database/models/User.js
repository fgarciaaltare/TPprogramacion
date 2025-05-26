module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'User'; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email:{
            type: dataTypes.STRING,
        },
        contrasena:{
            type: dataTypes.STRING,
        },
        fecha:{
            type: dataTypes.DATE,
        },
        dni: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
              isNumeric: true 
            }
          },
        foto_perfil:{
            type: dataTypes.STRING,
        },
        
    }

    let config = {
        tableName : "usuarios",
        timestamps:false, //Indica al modelo si debe buscar los campos createdAt y updatedAt en la tabla. Si están en la tabla no es necesario declararlos en la lista de campos.
        // Si en la tabla están con guión bajo hay que usar la propiedad underscore.
        // underscored: false, //Indica al modelo que si loscampos de timestamp en la tabla usan o no guiones bajos en lugar de camelCase.
    }

   const User = sequelize.define(alias, cols, config);


   return User;
}