import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class item extends Model {
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
    }
  }, {
    sequelize,
    tableName: 'Item',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Item__3214EC072BFBBF28",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
