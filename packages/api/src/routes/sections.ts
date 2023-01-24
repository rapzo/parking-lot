import { Router } from "express";
import { getSections, getSensorsFrom } from "@parking-lot/parking-lot-api";
import type { ParkingLotConfig } from "@parking-lot/types";

export const createSectionsRoutes = (_config: ParkingLotConfig) => {
  const router = Router();

  router.get("/sections", async (_req, res) => {
    return res.json(await getSections());
  });

  router.get("/sections/:id/sensors", async (req, res) => {
    const id = req.params.id;

    return res.json(await getSensorsFrom(id));
  });

  return router;
};
