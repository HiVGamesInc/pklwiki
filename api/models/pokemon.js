import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pokemon extends Model {
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
    IsShiny: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    Level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Tier: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Reference: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Characteristic: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'pokemon',
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
