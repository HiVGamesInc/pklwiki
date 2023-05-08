import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class move extends Model {
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
    tableName: 'Move',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Move__3214EC07C567216E",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
