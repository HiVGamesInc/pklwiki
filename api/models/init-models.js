import { DataTypes } from 'sequelize';
var DataTypes = require("sequelize").DataTypes;
var _evolutionLine = require("./evolutionLine");
var _item = require("./item");
var _move = require("./move");
var _pokemon = require("./pokemon");
var _pokemonItem = require("./pokemonItem");
var _pokemonMove = require("./pokemonMove");
var _pokemonType = require("./pokemonType");
var _type = require("./type");

function initModels(sequelize) {
  var evolutionLine = _evolutionLine(sequelize, DataTypes);
  var item = _item(sequelize, DataTypes);
  var move = _move(sequelize, DataTypes);
  var pokemon = _pokemon(sequelize, DataTypes);
  var pokemonItem = _pokemonItem(sequelize, DataTypes);
  var pokemonMove = _pokemonMove(sequelize, DataTypes);
  var pokemonType = _pokemonType(sequelize, DataTypes);
  var type = _type(sequelize, DataTypes);

  pokemonItem.belongsTo(item, { as: "Item", foreignKey: "ItemId"});
  item.hasMany(pokemonItem, { as: "PokemonItems", foreignKey: "ItemId"});
  pokemonMove.belongsTo(move, { as: "Move", foreignKey: "MoveId"});
  move.hasMany(pokemonMove, { as: "PokemonMoves", foreignKey: "MoveId"});
  evolutionLine.belongsTo(pokemon, { as: "Evolution", foreignKey: "EvolutionId"});
  pokemon.hasMany(evolutionLine, { as: "EvolutionLines", foreignKey: "EvolutionId"});
  evolutionLine.belongsTo(pokemon, { as: "Pokemon", foreignKey: "PokemonId"});
  pokemon.hasMany(evolutionLine, { as: "Pokemon_EvolutionLines", foreignKey: "PokemonId"});
  pokemonItem.belongsTo(pokemon, { as: "Pokemon", foreignKey: "PokemonId"});
  pokemon.hasMany(pokemonItem, { as: "PokemonItems", foreignKey: "PokemonId"});
  pokemonMove.belongsTo(pokemon, { as: "Pokemon", foreignKey: "PokemonId"});
  pokemon.hasMany(pokemonMove, { as: "PokemonMoves", foreignKey: "PokemonId"});
  pokemonType.belongsTo(pokemon, { as: "Pokemon", foreignKey: "PokemonId"});
  pokemon.hasMany(pokemonType, { as: "PokemonTypes", foreignKey: "PokemonId"});
  pokemonType.belongsTo(type, { as: "Type", foreignKey: "TypeId"});
  type.hasMany(pokemonType, { as: "PokemonTypes", foreignKey: "TypeId"});

  return {
    evolutionLine,
    item,
    move,
    pokemon,
    pokemonItem,
    pokemonMove,
    pokemonType,
    type,
  };
}

export default initModels;
