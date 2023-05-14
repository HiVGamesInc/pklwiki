import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pokemonitem extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    PokemonId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ItemId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pokemonitem',
    timestamps: false
  });
  }
}
