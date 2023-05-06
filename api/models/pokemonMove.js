const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pokemonMove', {
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
    MoveId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Move',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'PokemonMove',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__PokemonM__3214EC076412F8B8",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
