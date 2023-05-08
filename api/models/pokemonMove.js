import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pokemonMove extends Model {
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
        name: "PK__PokemonM__3214EC07F484B843",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
