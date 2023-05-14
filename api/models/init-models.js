import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _evolutionline from  "./evolutionline.js";
import _item from  "./item.js";
import _move from  "./move.js";
import _pokemon from  "./pokemon.js";
import _pokemonitem from  "./pokemonitem.js";
import _pokemonmove from  "./pokemonmove.js";
import _pokemontype from  "./pokemontype.js";
import _type from  "./type.js";

export default function initModels(sequelize) {
  const evolutionline = _evolutionline.init(sequelize, DataTypes);
  const item = _item.init(sequelize, DataTypes);
  const move = _move.init(sequelize, DataTypes);
  const pokemon = _pokemon.init(sequelize, DataTypes);
  const pokemonitem = _pokemonitem.init(sequelize, DataTypes);
  const pokemonmove = _pokemonmove.init(sequelize, DataTypes);
  const pokemontype = _pokemontype.init(sequelize, DataTypes);
  const type = _type.init(sequelize, DataTypes);

  pokemontype.belongsTo(pokemon, { foreignKey: "PokemonId"});
  pokemon.hasMany(pokemontype, { foreignKey: "PokemonId"});
  pokemontype.belongsTo(type, { foreignKey: "TypeId"});
  type.hasMany(pokemontype, { foreignKey: "TypeId"});

  return {
    evolutionline,
    item,
    move,
    pokemon,
    pokemonitem,
    pokemonmove,
    pokemontype,
    type,
  };
}
