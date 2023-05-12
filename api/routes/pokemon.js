import express from 'express'
import * as PokemonService from '../services/pokemon'

const router = express.Router()
  
router.get('/:id?', async (req, res) => {
  const id = req.params.id;
  const pokemonRows = await PokemonService.getPokemon(id);

  const pokeArr = []
  pokemonRows.forEach(poke => {
    pokeArr.push(poke)
  })

  res.status(200).send(pokeArr)
})

export default router
