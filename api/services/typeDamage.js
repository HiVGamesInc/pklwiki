import { sequelizeDb } from "../index";
import { camelizeColumn } from "../utils";

const fromDamageRatios = {
  noDamageFrom: 0,
  halfDamageFrom: 0.5,
  doubleDamageFrom: 2,
};

const toDamageRatios = {
  noDamageTo: 0,
  halfDamageTo: 0.5,
  doubleDamageTo: 2,
};

const getTypesDamage = async (typesId) => {
  try {
    const table = sequelizeDb.models.type;
    const allTypes = await table.findAll();

    // Step 1: Convert types to typesDamage array with initial values
    const typesDamage = allTypes.map(
      ({ dataValues: { Id: id, Name: name, ...type } }) => {
        const damages = Object.entries(type).reduce(
          (acc, [key, val]) => ({ ...acc, [camelizeColumn(key)]: val }),
          {}
        );
        return { id, name, damages, to: 0, from: 1 };
      }
    );

    // Step 2: Update damage values based on typesId
    typesId.forEach((typeId) => {
      const type = typesDamage.find((t) => t.id === typeId);

      if (type) {
        // Step 2a: Iterate over toDamageRatios and fromDamageRatios
        Object.entries({ ...toDamageRatios, ...fromDamageRatios }).forEach(
          ([key, val]) => {
            if (type.damages[key]) {
              const typeIds = type.damages[key].split(";");
              typesDamage.forEach((damage) => {
                if (typeIds.includes(damage.id.toString())) {
                  // Step 2b: Update damage values based on the ratio
                  if (key.endsWith("To")) {
                    damage.to = Math.max(damage.to, val);
                  } else if (key.endsWith("From")) {
                    damage.from *= val;
                  }
                }
              });
            }
          }
        );
      }
    });

    // Step 3: Remove the 'damages' property from the final result
    return typesDamage.map(({ damages, ...rest }) => rest);
  } catch (err) {
    console.log(err);
  }
};

export { getTypesDamage };
