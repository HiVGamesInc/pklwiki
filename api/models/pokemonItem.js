const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pokemonItem', {
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
    ItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Item',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'PokemonItem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__PokemonI__3214EC0712269DB2",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
