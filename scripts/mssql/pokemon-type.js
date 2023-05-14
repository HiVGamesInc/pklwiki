const sql = require('msnodesqlv8');
const axios = require('axios');
const connectionString = "server=(localdb)\\MSSQLLocalDB;Database=PklWikiDB;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

const getTypeData = async (typeName) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${typeName}`);
    const data = response.data.damage_relations;
    return {
        noDamageTo: data.no_damage_to.map(t => t.name),
        halfDamageTo: data.half_damage_to.map(t => t.name),
        doubleDamageTo: data.double_damage_to.map(t => t.name),
        noDamageFrom: data.no_damage_from.map(t => t.name),
        halfDamageFrom: data.half_damage_from.map(t => t.name),
        doubleDamageFrom: data.double_damage_from.map(t => t.name),
    };
};

const updateType = async (id, typeName, typeData, typeLookup) => {
    const query = `
        UPDATE Type SET
            NoDamageTo = ?,
            HalfDamageTo = ?,
            DoubleDamageTo = ?,
            NoDamageFrom = ?,
            HalfDamageFrom = ?,
            DoubleDamageFrom = ?
        WHERE Id = ?;
    `;
    const params = [
        typeData.noDamageTo.map(name => typeLookup[name]).join(';'),
        typeData.halfDamageTo.map(name => typeLookup[name]).join(';'),
        typeData.doubleDamageTo.map(name => typeLookup[name]).join(';'),
        typeData.noDamageFrom.map(name => typeLookup[name]).join(';'),
        typeData.halfDamageFrom.map(name => typeLookup[name]).join(';'),
        typeData.doubleDamageFrom.map(name => typeLookup[name]).join(';'),
        id
    ];
    sql.query(connectionString, query, params, (err) => {
        if (err) {
            console.error(`Error updating type ${typeName} with ID ${id}:`, err);
        } else {
            console.log(`Updated type ${typeName} with ID ${id}`);
        }
    });
};

const fetchAndUpdateType = async (id, typeName, typeLookup) => {
    try {
        const typeData = await getTypeData(typeName);
        await updateType(id, typeName, typeData, typeLookup);
    } catch (error) {
        console.error(`Error fetching and updating type ${typeName} with ID ${id}:`, error);
    }
};

const fetchAllTypesAndUpdateTable = async () => {
    const query = 'SELECT Id, Name FROM Type';
    sql.query(connectionString, query, async (err, result) => {
        if (err) {
            console.error('Error fetching types from the Type table:', err);
            return;
        }
        const typeLookup = result.reduce((acc, row) => {
            acc[row.Name] = row.Id;
            return acc;
        }, {});

        for (const row of result) {
            await fetchAndUpdateType(row.Id, row.Name, typeLookup);
        }
    });
};

fetchAllTypesAndUpdateTable();
