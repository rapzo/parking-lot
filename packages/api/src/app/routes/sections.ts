import { Router } from "express";
import { getSections, getSensorsFrom } from "@parking-lot/parking-lot-api";

export const sections: Router = Router();

sections.get("/sections", async (_req, res) => {
  return res.json(await getSections());
});

sections.get("/sections/:id/sensors", async (req, res) => {
  const id = req.params.id;

  return res.json(await getSensorsFrom(id));
});
