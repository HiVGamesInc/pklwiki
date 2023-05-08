import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class type extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    NoDamageTo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HalfDamageTo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DoubleDamageTo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NoDamageFrom: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HalfDamageFrom: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DoubleDamageFrom: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Type',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Type__3214EC07379D55D1",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
