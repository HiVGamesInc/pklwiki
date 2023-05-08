import { sequelizeDb } from '../index'
import PokemonType from '../models/pokemonType';

async function getAll() {
  try {
    const resp = await sequelizeDb.models.pokemon.findAll({
      include: [{
        model: PokemonType,
      }]
    })
    
    return resp
  } catch (err) {
    console.log(err)
  }
}

export {
    getAll
}
