const SequelizeAuto = await import('sequelize-auto')
import msnodesqlv8 from 'msnodesqlv8/lib/sequelize/index.js'

export const configObj = {
    host: '(localdb)\\MSSQLLocalDB',
    dialect: 'mssql',
    dialectModule: msnodesqlv8,
    dialectOptions: {
        options: {
          connectionString: 'server=(localdb)\\MSSQLLocalDB;Database=PklWikiDB;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}',
        },
      },
    directory: './models', // where to write files
    port: '1433',
    caseModel: 'c', // convert snake_case column names to camelCase field names: user_id -> userId
    caseFile: 'c', // file names created for each model use camelCase.js not snake_case.js
    singularize: true, // convert plural table names to singular model names
    additional: {
        timestamps: false
        // ...options added to each model
    },
    // tables: ['table1', 'table2', 'myschema.table3'] // use all tables, if omitted
    //...
}

const config = new SequelizeAuto('', '', '', configObj)

config.run().then(data => {
  console.log(data.tables);      // table and field list
  console.log(data.foreignKeys); // table foreign key list
  console.log(data.indexes);     // table indexes
  console.log(data.hasTriggerTables); // tables that have triggers
  console.log(data.relations);   // relationships between models
  console.log(data.text)         // text of generated models
});
