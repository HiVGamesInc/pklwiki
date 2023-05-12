import { sequelizeDb } from '../index'
import PokemonType from '../models/pokemonType';

async function getPokemon(id = false) {
  try {
    const table = sequelizeDb.models.pokemon
    const queryFunc = id ? 'findOne' : 'findAll'
    
    let pokemon = await table[queryFunc]({
      ...(id ? {where: { reference: id }} : {}),
      include: [{
        model: PokemonType,
      }]
    })

    pokemon = id ? [pokemon] : pokemon
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
        types: data.pokemonTypes.map(type => type.TypeId)
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
