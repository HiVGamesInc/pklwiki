import express from 'express'
import * as PokemonService from '../services/pokemon'

const router = express.Router()
  
router.get('/', async (req, res) => {
  const pokemonRows = await PokemonService.getAll();
console.log(pokemonRows)
  const pokeArr = []
  pokemonRows.forEach(({ dataValues: poke }) => {
    pokeArr.push(poke)
  })

  res.status(200).send(pokeArr)
})

module.exports = router