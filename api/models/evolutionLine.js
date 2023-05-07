const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evolutionLine', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PokemonId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Pokemon',
        key: 'Id'
      }
    },
    EvolutionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Pokemon',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'EvolutionLine',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Evolutio__3214EC07BD725FD8",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
