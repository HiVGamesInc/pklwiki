import express from 'express'
import Sequelize from 'sequelize';
import msnodesqlv8 from 'msnodesqlv8/lib/sequelize/index.js'
import initModels from './models/init-models.js'
import * as PokemonService from './services/pokemon.js'

const app = express()
const port = 3001

export const db = {}

async function init() {
  const sequelizeDb = new Sequelize('','','', {
    host: '(localdb)\\MSSQLLocalDB',
    dialect: 'mssql',
    dialectModule: msnodesqlv8,
    dialectOptions: {
        options: {
          connectionString: 'server=(localdb)\\MSSQLLocalDB;Database=PklWikiDB;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}',
        },
      },
    port: '1433',
  });
  
  initModels()
  
  // sync all models with database (careful, make changes in database)
  // await sequelizeDb.sync({ alter: true });
}

app.get('/', (req, res) => {
  res.send('Hello 321!')
})

app.get('/pokemon', async (req, res) => {
  const pokemonRows = await PokemonService.getAll();
  
  const pokeArr = []
  pokemonRows.forEach(({ dataValues: poke }) => {
    pokeArr.push(poke)
  })

  res.status(200).send(pokeArr)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

init();
