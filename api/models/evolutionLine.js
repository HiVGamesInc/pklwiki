import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class evolutionLine extends Model {
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
        name: "PK__Evolutio__3214EC075A34BE68",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
