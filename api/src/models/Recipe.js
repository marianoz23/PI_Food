const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    image: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    }, 
    healthscore: {
      type: DataTypes.INTEGER,
    },
    instructions: {
      type:DataTypes.STRING,
    },
    diets: {
      type:DataTypes.ARRAY(DataTypes.STRING),
    },
    dishTypes: {
      type:DataTypes.ARRAY(DataTypes.STRING),
    },
    tipo: {
      type : DataTypes.INTEGER,
      defaultValue: 0
    }

  },{
    timestamps: false
  });
};

/*
[ ] Receta con las siguientes propiedades:
ID: *
Nombre *
Resumen del plato *
Nivel de "comida saludable" (health score)
Paso a paso
*/