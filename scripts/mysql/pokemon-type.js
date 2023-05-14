const mysql = require('mysql2/promise');
const axios = require('axios');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Alrt1234',
  database: 'pklwikidb'
};

const getTypeData = async (typeName, connection) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/type/${typeName}`);
  const data = response.data.damage_relations;

  const querySelect = 'SELECT Id, Name From type'
  const [rows] = await connection.execute(querySelect, [typeName]);

  return {
    noDamageTo: data.no_damage_to.map(t => rows.find(r=> r.Name === t.name).Id),
    halfDamageTo: data.half_damage_to.map(t => rows.find(r=> r.Name === t.name).Id),
    doubleDamageTo: data.double_damage_to.map(t =>rows.find(r=> r.Name === t.name).Id),
    noDamageFrom: data.no_damage_from.map(t => rows.find(r=> r.Name === t.name).Id),
    halfDamageFrom: data.half_damage_from.map(t => rows.find(r=> r.Name === t.name).Id),
    doubleDamageFrom: data.double_damage_from.map(t => rows.find(r=> r.Name === t.name).Id),
  };
};

const updateType = async (id, typeName, typeData, connection) => {
  const query = `
    UPDATE type SET
        NoDamageTo = ?,
        HalfDamageTo = ?,
        DoubleDamageTo = ?,
        NoDamageFrom = ?,
        HalfDamageFrom = ?,
        DoubleDamageFrom = ?
    WHERE Id = ?;
  `;

  const params = [
    typeData.noDamageTo.join(';'),
    typeData.halfDamageTo.join(';'),
    typeData.doubleDamageTo.join(';'),
    typeData.noDamageFrom.join(';'),
    typeData.halfDamageFrom.join(';'),
    typeData.doubleDamageFrom.join(';'),
    id
  ];
  try {
    await connection.execute(query, params);
    console.log(`Updated type ${typeName} with ID ${id}`);
  } catch (error) {
    console.error(`Error updating type ${typeName} with ID ${id}:`, error);
  }
};

const fetchAndUpdateType = async (id, typeName, connection) => {
    const selectQuery = `
      SELECT Id
      FROM type
      WHERE Name = ?;
    `;
    try {
      const [[{ Id }]] = await connection.execute(selectQuery, [typeName]);
      const typeData = await getTypeData(typeName, connection);
      await updateType(Id, typeName, typeData, connection);
    } catch (error) {
      console.error(`Error fetching and updating type ${typeName}:`, error);
    }
  };

const fetchAllTypesAndUpdateTable = async () => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT Id, Name FROM type');
console.log(rows)
  for (const row of rows) {
    await fetchAndUpdateType(row.Id, row.Name, connection);
  }

  connection.end();
};

fetchAllTypesAndUpdateTable();



/* Query to insert types

INSERT INTO Type (Name) VALUES
    ('normal'),
    ('fire'),
    ('water'),
    ('electric'),
    ('grass'),
    ('ice'),
    ('fighting'),
    ('poison'),
    ('ground'),
    ('flying'),
    ('psychic'),
    ('bug'),
    ('rock'),
    ('ghost'),
    ('dragon'),
    ('dark'),
    ('steel'),
    ('fairy');

*/