const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pokemonType', {
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
    TypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Type',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'PokemonType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__PokemonT__3214EC074EB02B9E",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
