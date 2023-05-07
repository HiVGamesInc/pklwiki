import { db } from '../index.js'

async function getAll() {
    return await db.Pokemon.findAll({
        include: [{
          model: PokemonType,
          as: 'PokemonType',
        }]
      })
      .then(pokemons => console.log(pokemons))
      .catch(console.error);
}

export {
    getAll
}
