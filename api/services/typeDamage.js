import { sequelizeDb } from "../index";
import { Op } from "sequelize";

async function getTypesDamage(typesId) {
  try {
    const table = sequelizeDb.models.type;

    const allTypes = await table.findAll();
    let damageTo = [];
    let damageFrom = [];
    allTypes.forEach((type) => {
      damageTo.push({
        Id: type.Id,
        Name: type.Name,
        Damage: 1,
        Modified: false,
      });
      damageFrom.push({ Id: type.Id, Name: type.Name, Damage: 1 });
    });

    typesId.forEach((typeId) => {
      const type = allTypes.find((type) => type.Id === typeId);
      const noDamageToTypesId = type.dataValues.NoDamageTo.split(";");
      const halfDamageToTypesId = type.dataValues.HalfDamageTo.split(";");
      const doubleDamageToTypesId = type.dataValues.DoubleDamageTo.split(";");
      const noDamageFromTypesId = type.dataValues.NoDamageFrom.split(";");
      const halfDamageFromTypesId = type.dataValues.HalfDamageFrom.split(";");
      const doubleDamageFromTypesId =
        type.dataValues.DoubleDamageFrom.split(";");

      noDamageFromTypesId.forEach((noDamageFromTypeId) => {
        if (noDamageFromTypeId) {
          damageFrom.find((d) => d.Id == noDamageFromTypeId).Damage = 0;
        }
      });

      doubleDamageFromTypesId.forEach((doubleDamageFromTypeId) => {
        if (doubleDamageFromTypeId) {
          damageFrom.find((d) => d.Id == doubleDamageFromTypeId).Damage *= 2;
        }
      });

      halfDamageFromTypesId.forEach((halfDamageFromTypeId) => {
        if (halfDamageFromTypeId) {
          damageTo.find((d) => d.Id == halfDamageFromTypeId).Damage *= 0.5;
        }
      });

      noDamageToTypesId.forEach((noDamageToTypeId) => {
        if (noDamageToTypeId) {
          const type = damageTo.find((d) => d.Id == noDamageToTypeId);
          if (!type.Modified) {
            type.Modified = true;
            type.Damage = 0;
          }
        }
      });

      doubleDamageToTypesId.forEach((doubleDamageToTypeId) => {
        if (doubleDamageToTypeId) {
          const type = damageTo.find((d) => d.Id == doubleDamageToTypeId);
          if (!type.Modified || type.Damage < 2) {
            type.Modified = true;
            type.Damage = 2;
          }
        }
      });

      halfDamageToTypesId.forEach((halfDamageToTypeId) => {
        if (halfDamageToTypeId) {
          const type = damageTo.find((d) => d.Id == halfDamageToTypeId);
          if (!type.Modified || type.Damage < 0.5) {
            type.Modified = true;
            type.Damage = 0.5;
          }
        }
      });
    });
    console.log(damageTo);
    console.log(damageFrom);

    const returnValue = { From: damageFrom, To: damageTo };
    return returnValue;
  } catch (err) {
    console.log(err);
  }
}

export { getTypesDamage };
