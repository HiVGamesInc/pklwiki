import express from "express";
import * as TypeDamageService from "../services/typeDamage";

const router = express.Router();

router.get("/", async (req, res) => {
  let types = req.query.types;

  types = types.split(",");
  types = types.map((type) => Number(type));

  const typeDamageRows = await TypeDamageService.getTypesDamage(types);

  res.status(200).send(typeDamageRows);
});

export default router;
