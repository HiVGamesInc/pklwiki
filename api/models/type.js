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
      allowNull: false,
      defaultValue: ""
    },
    NoDamageTo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    HalfDamageTo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    DoubleDamageTo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    NoDamageFrom: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    HalfDamageFrom: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    DoubleDamageFrom: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'type',
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
    ]
  });
  }
}
