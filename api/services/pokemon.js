import { sequelizeDb } from '../index'
import PokemonType from '../models/pokemontype';

async function getPokemon(id = false) {
  try {
    const table = sequelizeDb.models.pokemon
    
    let pokemon = await table.findAll({
      ...(id ? {where: { reference: id }} : {}),
      include: [{
        model: PokemonType,
      }]
    })

    pokemon = await Promise.all(pokemon.map(async item => {
      const data = item.dataValues
      // const types = await getTypes(data.types)

      return ({
        id: data.Id,
        name: data.Name,
        isShiny: data.IsShiny,
        level: data.Level,
        tier: data.Tier,
        reference: data.Reference,
        description: data.Description,
        characteristic: data.Characteristic,
        types: data.pokemontypes.map(type => type.TypeId)
      })
    }))

    return pokemon
  } catch (err) {
    console.log(err)
  }
}

export {
  getPokemon
}
