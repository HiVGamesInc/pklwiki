import express from 'express'
import Sequelize from 'sequelize';
import dotenv from 'dotenv'
import msnodesqlv8 from 'msnodesqlv8/lib/sequelize/index'

import initModels from './models/init-models'
import mainRouter from './routes'

dotenv.config()

const app = express()
const port = 3001

export let sequelizeDb = {}

async function init() {
  sequelizeDb = new Sequelize('','','', {
    host: process.env.MSSQL_DBHOST,
    dialect: 'mssql',
    dialectModule: msnodesqlv8,
    dialectOptions: {
        options: {
          connectionString: `server=${process.env.MSSQL_DBHOST};Database=${process.env.MSSQL_DBNAME};Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server}`,
        },
      },
    noAlias: true,
    port: process.env.MSSQL_DBPORT,
  });

  
  try {
    await sequelizeDb.authenticate();
    console.log('Connection has been established successfully.');

    initModels(sequelizeDb)
    setupRoutes()

    // sync all models with database (careful, make changes in database)
    // await sequelizeDb.sync({ alter: true });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

const setupRoutes = () => {
  mainRouter.forEach(route => {
    app.use(route.path, route.router)
  })
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

init();
