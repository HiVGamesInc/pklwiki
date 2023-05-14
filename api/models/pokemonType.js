import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pokemontype extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
        model: 'pokemon',
        key: 'Id'
      }
    },
    TypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'type',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'pokemontype',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
        ]
      },
      {
        name: "fk_pokemonType_pokemonId_idx",
        using: "BTREE",
        fields: [
          { name: "PokemonId" },
        ]
      },
      {
        name: "fk_pokemonType_typeId_idx",
        using: "BTREE",
        fields: [
          { name: "TypeId" },
        ]
      },
    ]
  });
  }
}
