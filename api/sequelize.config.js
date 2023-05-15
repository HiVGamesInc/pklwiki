const SequelizeAuto = require('sequelize-auto')
const mysql = require('mysql2')

require('dotenv').config()

const configObj = {
    host: process.env.MYSQL_DBHOST,
    dialect: 'mysql',
    dialectModule: mysql,
    lang: 'esm',
    directory: './models', // where to write files
    caseModel: 'c', // convert snake_case column names to camelCase field names: user_id -> userId
    caseFile: 'c', // file names created for each model use camelCase.js not snake_case.js
    singularize: true, // convert plural table names to singular model names
    noAlias: true,
    additional: {
        timestamps: false,
        // ...options added to each model
    },
    // tables: ['table1', 'table2', 'myschema.table3'] // use all tables, if omitted
    //...
}

const config = new SequelizeAuto(process.env.MYSQL_DBNAME, process.env.MYSQL_DBUSER,process.env.MYSQL_DBPASSWORD, configObj)


config.run().then(data => {
  console.log(data.tables);      // table and field list
  console.log(data.foreignKeys); // table foreign key list
  console.log(data.indexes);     // table indexes
  console.log(data.hasTriggerTables); // tables that have triggers
  console.log(data.relations);   // relationships between models
  console.log(data.text)         // text of generated models
});

module.exports = {
  configObj
}
