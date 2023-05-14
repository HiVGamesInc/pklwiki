const sql = require('msnodesqlv8');
const axios = require('axios');
const connectionString = "server=(localdb)\\MSSQLLocalDB;Database=PklWikiDB;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

const insertPokemon = async (pokemon) => {
    const query = `
        INSERT INTO Pokemon (Reference, Name, IsShiny, Level, Tier, Description, Characteristic)
        VALUES (?, ?, ?, 1, 1, '', NULL)
    `;
    const params = [pokemon.id, `shiny ${pokemon.name}`, true];
    sql.query(connectionString, query, params, (err) => {
        if (err) {
            console.error(`Error inserting ${pokemon.name} with ID ${pokemon.id}:`, err);
        } else {
            console.log(`Inserted ${pokemon.name} with ID ${pokemon.id}`);
        }
    });
};

const fetchAndInsertPokemon = async (id) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${id}`);
        const pokemon = {
            id: response.data.id,
            name: response.data.name,
        };
        await insertPokemon(pokemon);
    } catch (error) {
        console.error(`Error fetching and inserting Pokemon with ID ${id}:`, error);
    }
};

const populatePokemonTable = async () => {
    const ids = [...Array(251).keys()].map(i => i + 1); // Change 251 to the desired number of Pokemon you want to fetch
    for (const id of ids) {
        await fetchAndInsertPokemon(id);
    }
};

populatePokemonTable();
