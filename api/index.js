import express from 'express'
import Sequelize from 'sequelize';
import dotenv from 'dotenv'
import mysql from 'mysql2'

import initModels from './models/init-models'
import mainRouter from './routes'

dotenv.config()

const app = express()
const port = 3001

export let sequelizeDb = {}

async function init() {
  sequelizeDb = new Sequelize(process.env.MYSQL_DBNAME, process.env.MYSQL_DBUSER, process.env.MYSQL_DBPASSWORD, {
    host: process.env.MYSQL_DBHOST,
    dialect: 'mysql',
    dialectModule: mysql,
    noAlias: true,
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
