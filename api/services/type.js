import { sequelizeDb } from "../index";

async function getType(id = false) {
  try {
    const table = sequelizeDb.models.type;

    let type = await table.findAll({
      ...(id ? { where: { Id: id } } : {}),
    });

    type = await Promise.all(
      type.map(async (item) => {
        const data = item.dataValues;

        return {
          id: data.Id,
          name: data.Name,
        };
      })
    );

    return type;
  } catch (err) {
    console.log(err);
  }
}

export { getType };
