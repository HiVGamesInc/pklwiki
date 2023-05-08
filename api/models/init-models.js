import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _evolutionLine from  "./evolutionLine.js";
import _item from  "./item.js";
import _move from  "./move.js";
import _pokemon from  "./pokemon.js";
import _pokemonItem from  "./pokemonItem.js";
import _pokemonMove from  "./pokemonMove.js";
import _pokemonType from  "./pokemonType.js";
import _type from  "./type.js";

export default function initModels(sequelize) {
  const evolutionLine = _evolutionLine.init(sequelize, DataTypes);
  const item = _item.init(sequelize, DataTypes);
  const move = _move.init(sequelize, DataTypes);
  const pokemon = _pokemon.init(sequelize, DataTypes);
  const pokemonItem = _pokemonItem.init(sequelize, DataTypes);
  const pokemonMove = _pokemonMove.init(sequelize, DataTypes);
  const pokemonType = _pokemonType.init(sequelize, DataTypes);
  const type = _type.init(sequelize, DataTypes);

  pokemonItem.belongsTo(item, { foreignKey: "ItemId"});
  item.hasMany(pokemonItem, { foreignKey: "ItemId"});
  pokemonMove.belongsTo(move, { foreignKey: "MoveId"});
  move.hasMany(pokemonMove, { foreignKey: "MoveId"});
  evolutionLine.belongsTo(pokemon, { foreignKey: "EvolutionId"});
  pokemon.hasMany(evolutionLine, { foreignKey: "EvolutionId"});
  evolutionLine.belongsTo(pokemon, { foreignKey: "PokemonId"});
  pokemon.hasMany(evolutionLine, { foreignKey: "PokemonId"});
  pokemonItem.belongsTo(pokemon, { foreignKey: "PokemonId"});
  pokemon.hasMany(pokemonItem, { foreignKey: "PokemonId"});
  pokemonMove.belongsTo(pokemon, { foreignKey: "PokemonId"});
  pokemon.hasMany(pokemonMove, { foreignKey: "PokemonId"});
  pokemonType.belongsTo(pokemon, { foreignKey: "PokemonId"});
  pokemon.hasMany(pokemonType, { foreignKey: "PokemonId"});
  pokemonType.belongsTo(type, { foreignKey: "TypeId"});
  type.hasMany(pokemonType, { foreignKey: "TypeId"});

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
