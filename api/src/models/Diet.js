const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Diet', {
    id:{
      type : DataTypes.STRING(2),
      primaryKey : true,
      allowNull : false
   },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }  
  },{
    timestamps: false
  });
};