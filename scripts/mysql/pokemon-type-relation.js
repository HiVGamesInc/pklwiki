const mysql = require('mysql2/promise');
const axios = require('axios');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Alrt1234',
  database: 'pklwikidb'
}

async function fetchPokemonData(id) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for Pokemon with ID ${id}:`, error.message);
  }
}

async function getIdFromTable(tableName, columnName, value, connection) {
  const query = `SELECT Id FROM ${tableName} WHERE ${columnName} = ?;`;

  const [rows, fields] = await connection.execute(query, [value]);
  return rows[0].Id;
}

async function insertPokemonType(pokemon, connection) {
  const pokemonId = await getIdFromTable('pokemon', 'Name', `${pokemon.name}`, connection);

  for (const type of pokemon.types) {
    const typeId = await getIdFromTable('type', 'Name', type.type.name, connection);

    const query = `
      INSERT INTO PokemonType (PokemonId, TypeId)
      VALUES (?, ?);
    `;

    await connection.execute(query, [pokemonId, typeId]);
    console.log(`Inserted type '${type.type.name}' for Pokemon with ID ${pokemon.id}`);
  }
}

(async () => {
  const connection = await mysql.createConnection(dbConfig);

  for (let id = 1; id <= 251; id++) {
    const pokemonData = await fetchPokemonData(id);
    await insertPokemonType(pokemonData, connection);
  }

  console.log('Finished populating PokemonType table.');
  
  await connection.end();
})();