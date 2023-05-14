const axios = require('axios');
const sql = require('msnodesqlv8');

const connectionString = "server=(localdb)\\MSSQLLocalDB;Database=PklWikiDB;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

async function fetchPokemonData(id) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for Pokemon with ID ${id}:`, error.message);
  }
}

async function getIdFromTable(tableName, columnName, value) {
  return new Promise((resolve, reject) => {
    const query = `SELECT Id FROM ${tableName} WHERE ${columnName} = ?;`;

    sql.query(connectionString, query, [value], (err, results) => {
      if (err) {
        console.error(`Error getting ID from ${tableName} for ${columnName} ${value}:`, err.message);
        reject(err);
      } else {
        resolve(results[0].Id);
      }
    });
  });
}

async function insertPokemonType(pokemon) {
  const pokemonId = await getIdFromTable('Pokemon', 'Name', `shiny ${pokemon.name}`);

  for (const type of pokemon.types) {
    const typeId = await getIdFromTable('Type', 'Name', type.type.name);

    const query = `
      INSERT INTO PokemonType (PokemonId, TypeId)
      VALUES (?, ?);
    `;

    sql.query(connectionString, query, [pokemonId, typeId], (err) => {
      if (err) {
        console.error(`Error inserting type for Pokemon with ID ${pokemon.id}:`, err.message);
      } else {
        console.log(`Inserted type '${type.type.name}' for Pokemon with ID ${pokemon.id}`);
      }
    });
  }
}

(async () => {
  for (let id = 1; id <= 251; id++) {
    const pokemonData = await fetchPokemonData(id);
    await insertPokemonType(pokemonData);
  }

  console.log('Finished populating PokemonType table.');
})();
