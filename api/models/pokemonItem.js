import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pokemonItem extends Model {
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
        name: "PK__PokemonI__3214EC07CF9442A3",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
