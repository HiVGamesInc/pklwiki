import express from "express";
import * as TypeService from "../services/type";

const router = express.Router();

router.get("/:id?", async (req, res) => {
  const id = req.params.id;
  const typeRows = await TypeService.getType(id);

  const typeArr = [];
  typeRows.forEach((type) => {
    typeArr.push(type);
  });

  res.status(200).send(typeArr);
});

export default router;
