import { DataTypes } from 'sequelize';

function model(sequelize) {
  return sequelize.define('pokemon', {
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
      type: DataTypes.BOOLEAN,
      allowNull: false
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
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Pokemon',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Pokemon__3214EC079EDE9E82",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};

export default model
