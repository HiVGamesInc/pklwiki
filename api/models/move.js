import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class move extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'move',
    timestamps: false
  });
  }
}
