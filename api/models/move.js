const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('move', {
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
        name: "PK__Move__3214EC079EDFDB8B",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
