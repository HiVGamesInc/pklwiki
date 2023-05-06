const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item', {
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
        name: "PK__Item__3214EC0701AFED40",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
