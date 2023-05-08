import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pokemonType extends Model {
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
        name: "PK__PokemonT__3214EC0750CAD60C",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
